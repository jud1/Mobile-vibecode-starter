import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

const [platform, ...args] = process.argv.slice(2);
if (platform !== 'android' && platform !== 'ios') {
  console.error('Uso: node scripts/run-native.mjs android|ios [...argumentos de Expo]');
  process.exit(2);
}

const env = { ...process.env };

if (platform === 'android' && process.platform === 'darwin') {
  env.ANDROID_HOME ??= path.join(homedir(), 'Library', 'Android', 'sdk');
  env.ANDROID_SDK_ROOT ??= env.ANDROID_HOME;

  if (!env.JAVA_HOME) {
    const javaHomes = [
      '/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home',
      '/usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home',
      '/Applications/Android Studio.app/Contents/jbr/Contents/Home',
    ];
    env.JAVA_HOME = javaHomes.find((candidate) => existsSync(path.join(candidate, 'bin', 'java')));
  }

  const extraPaths = [
    env.JAVA_HOME && path.join(env.JAVA_HOME, 'bin'),
    path.join(env.ANDROID_HOME, 'platform-tools'),
    path.join(env.ANDROID_HOME, 'emulator'),
    path.join(env.ANDROID_HOME, 'cmdline-tools', 'latest', 'bin'),
  ].filter(Boolean);
  env.PATH = [...extraPaths, env.PATH].filter(Boolean).join(path.delimiter);
}

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(npx, ['expo', `run:${platform}`, ...args], {
  cwd: process.cwd(),
  env,
  stdio: 'inherit',
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    if (!child.killed) {
      child.kill(signal);
    }
  });
}

const result = await new Promise((resolve, reject) => {
  child.once('error', reject);
  child.once('exit', (code, signal) => resolve({ code, signal }));
});

process.exitCode = result.code ?? (result.signal ? 0 : 1);
