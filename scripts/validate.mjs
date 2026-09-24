import { rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const full = process.argv.includes('--full');

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(npm, ['run', 'lint']);
run(npm, ['run', 'typecheck']);
run(npm, ['test']);

if (full) {
  run(npm, ['run', 'doctor']);
  rmSync('.artifacts/export', { recursive: true, force: true });
  run(npx, [
    'expo',
    'export',
    '--platform',
    'all',
    '--output-dir',
    '.artifacts/export',
    '--clear',
  ]);
}

console.log(full ? 'Validación completa finalizada.' : 'Validación rápida finalizada.');
