process.stdin.setEncoding('utf8');

console.log(
  JSON.stringify({
    jsonrpc: '2.0',
    result: 'creative-assets server ready',
    id: 1,
  }),
);

process.stdin.on('data', (data) => {
  try {
    const msg = JSON.parse(data);
    if (msg.method === 'handshake') {
      process.stdout.write(
        JSON.stringify({ jsonrpc: '2.0', result: 'handshake-ok', id: msg.id }) +
          '\n',
      );
    } else if (msg.method === 'extractBrand') {
      // Przykładowe dane brandowe
      const result = {
        colors: {
          primary: '#3b82f6',
          secondary: '#f59e0b',
          background: '#fff',
        },
        fonts: ['Inter', 'Roboto', 'Arial'],
        logo: 'https://dummyimage.com/200x80/3b82f6/fff&text=LOGO',
        guidelines:
          'Brand guidelines: używaj kolorów firmowych, fontów i logo.',
      };
      process.stdout.write(
        JSON.stringify({ jsonrpc: '2.0', result, id: msg.id }) + '\n',
      );
    } else {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: '2.0',
          error: 'unknown method',
          id: msg.id,
        }) + '\n',
      );
    }
  } catch (e) {
    process.stdout.write(
      JSON.stringify({ jsonrpc: '2.0', error: 'parse error', id: null }) + '\n',
    );
  }
});
