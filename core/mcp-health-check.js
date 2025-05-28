const { spawn } = require('child_process');
const path = require('path');

const servers = [
  {
    name: 'creative-assets',
    command: 'node',
    args: ['./mcp_servers/creative-assets/dist/index.js'],
    handshake: { jsonrpc: '2.0', method: 'handshake', id: 1 },
  },
  {
    name: 'code-export',
    command: 'node',
    args: ['./mcp_servers/code-export/dist/index.js'],
    handshake: { jsonrpc: '2.0', method: 'handshake', id: 1 },
  },
];

function checkServer(server) {
  return new Promise((resolve) => {
    console.log(`\n[${server.name}] Sprawdzam...`);
    const proc = spawn(server.command, server.args, {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe'],
      env: process.env,
    });
    let output = '';
    let error = '';
    let responded = false;
    const timeout = setTimeout(() => {
      if (!responded) {
        proc.kill();
        resolve({ name: server.name, status: 'timeout', output, error });
      }
    }, 4000);
    proc.stdout.on('data', (data) => {
      output += data.toString();
      // MCP handshake response detection (very basic)
      if (output.includes('jsonrpc') || output.includes('handshake')) {
        responded = true;
        clearTimeout(timeout);
        proc.kill();
        resolve({ name: server.name, status: 'ok', output });
      }
    });
    proc.stderr.on('data', (data) => {
      error += data.toString();
    });
    proc.on('error', (err) => {
      clearTimeout(timeout);
      resolve({ name: server.name, status: 'error', error: err.message });
    });
    proc.on('exit', (code) => {
      if (!responded) {
        clearTimeout(timeout);
        resolve({
          name: server.name,
          status: code === 0 ? 'ok' : 'error',
          output,
          error,
        });
      }
    });
    // Wyślij handshake po 500ms (gdy serwer gotowy)
    setTimeout(() => {
      proc.stdin.write(JSON.stringify(server.handshake) + '\n');
    }, 500);
  });
}

(async () => {
  for (const server of servers) {
    const result = await checkServer(server);
    console.log(`[${server.name}] Status: ${result.status}`);
    if (result.output)
      console.log(`[${server.name}] Output:`, result.output.trim());
    if (result.error)
      console.error(`[${server.name}] Error:`, result.error.trim());
  }
})();
