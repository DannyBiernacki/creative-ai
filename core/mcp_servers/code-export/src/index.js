process.stdin.setEncoding('utf8');

console.log(
  JSON.stringify({ jsonrpc: '2.0', result: 'code-export server ready', id: 1 }),
);

process.stdin.on('data', (data) => {
  try {
    const msg = JSON.parse(data);
    if (msg.method === 'handshake') {
      process.stdout.write(
        JSON.stringify({ jsonrpc: '2.0', result: 'handshake-ok', id: msg.id }) +
          '\n',
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
