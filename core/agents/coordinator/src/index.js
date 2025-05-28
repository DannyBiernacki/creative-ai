const { spawn } = require('child_process');

console.log('[Coordinator Agent] Startuję workflow...');

function runAgent(cmd, args, label) {
  return new Promise((resolve) => {
    const proc = spawn('node', args, {
      cwd: cmd,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    let output = '';
    proc.stdout.on('data', (data) => {
      output += data.toString();
    });
    proc.stderr.on('data', (data) => {
      output += data.toString();
    });
    proc.on('close', () => {
      console.log(`[${label}] Output:\n${output.trim()}`);
      resolve(output.trim());
    });
  });
}

(async () => {
  await runAgent(
    '../../research/src',
    ['index.js', 'AI w designie'],
    'Research Agent',
  );
  await runAgent(
    '../../brand-strategy/src',
    ['index.js', 'Nowoczesna marka technologiczna'],
    'Brand Strategy Agent',
  );
  await runAgent(
    '../../ux-intelligence/src',
    ['index.js', 'Kreatywna platforma AI'],
    'UX Intelligence Agent',
  );
  console.log('[Coordinator Agent] Workflow zakończony.');
})();
