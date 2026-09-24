import net from 'node:net';
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const hasExplicitPort = args.some((arg) => arg === '--port' || arg.startsWith('--port='));
const onlyShowsHelp = args.includes('--help') || args.includes('-h');

function isPortAvailable(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        reject(error);
      }
    });
    server.once('listening', () => server.close(() => resolve(true)));
    server.listen({ host: '127.0.0.1', port, exclusive: true });
  });
}

if (!hasExplicitPort && !onlyShowsHelp) {
  let port = 8081;
  while (port < 65536 && !(await isPortAvailable(port))) {
    port += 1;
  }

  if (port === 65536) {
    throw new Error('No se encontró un puerto disponible para Expo.');
  }

  if (port !== 8081) {
    console.warn(`El puerto 8081 está ocupado; Expo usará ${port}.`);
  }
  args.push('--port', String(port));
}

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(npx, ['expo', 'start', ...args], {
  cwd: process.cwd(),
  env: process.env,
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
