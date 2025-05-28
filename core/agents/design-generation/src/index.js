const { spawn } = require('child_process');

// Pobierz brief z argumentu CLI lub domyślny
const brief =
  process.argv[2] ||
  'Stwórz identyfikację wizualną dla nowoczesnej marki technologicznej.';

const mcpProc = spawn(
  'node',
  ['../../../mcp_servers/creative-assets/dist/index.js'],
  {
    cwd: __dirname,
    stdio: ['pipe', 'pipe', 'pipe'],
  },
);

mcpProc.stdout.on('data', (data) => {
  const lines = data.toString().split('\n').filter(Boolean);
  for (const line of lines) {
    try {
      const msg = JSON.parse(line);
      if (msg.result && msg.result.colors) {
        console.log('Odpowiedź extractBrand:', msg.result);
        // Prosta rekomendacja na podstawie briefu i odpowiedzi MCP
        console.log('\nRekomendacja:');
        console.log(
          `Użyj kolorów: ${Object.values(msg.result.colors).join(', ')}`,
        );
        console.log(`Fonty: ${msg.result.fonts.join(', ')}`);
        console.log(`Logo: ${msg.result.logo}`);
        console.log(`Guidelines: ${msg.result.guidelines}`);
        mcpProc.kill();
      }
    } catch {}
  }
});

mcpProc.stderr.on('data', (data) => {
  console.error('Błąd MCP:', data.toString());
});

// Poczekaj aż serwer się uruchomi, potem wyślij zapytanie extractBrand z briefem
setTimeout(() => {
  const req = {
    jsonrpc: '2.0',
    method: 'extractBrand',
    params: { brief },
    id: 2,
  };
  mcpProc.stdin.write(JSON.stringify(req) + '\n');
}, 500);
