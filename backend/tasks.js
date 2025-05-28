const { task, series, parallel } = require('task-master-ai');

// === CORE DEVELOPMENT TASKS ===

task('build', async () => {
  try {
    console.log('🔨 Building Creative AI Studio 2025...');
    await series(['npm run lint', 'npm run build', 'npm run test']);
    console.log('✅ Build completed successfully!');
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
});

task('commit', async () => {
  console.log('📝 Committing changes...');
  await series([
    'git add .',
    'task-master-ai commit --ai-message',
    'git push origin main',
  ]);
});

task('review', async () => {
  console.log('🔍 Running code review...');
  await parallel([
    'task-master-ai review --security',
    'task-master-ai review --performance',
    'npm run test -- --coverage',
  ]);
});

// === MCP SERVER TASKS ===

task('mcp:creative', async () => {
  console.log('🎨 Starting Creative Assets MCP Server...');
  await series([
    'cd mcp-servers/creative-assets',
    'npm run build',
    'npm run start',
  ]);
});

task('mcp:orchestrator', async () => {
  console.log('🤖 Starting Multi-Agent MCP Server...');
  await series([
    'cd mcp-servers/multi-agent',
    'npm run build',
    'npm run start',
  ]);
});

task('mcp:all', async () => {
  console.log('🚀 Starting all MCP servers...');
  await parallel(['mcp:creative', 'mcp:orchestrator']);
});

// === DOCUMENTATION & MAINTENANCE ===

task('docs', async () => {
  console.log('📚 Generating documentation...');
  await series([
    'task-master-ai docs --ai-enhance',
    'npm run docs:build',
    'git add docs/',
    'git commit -m "docs: AI-enhanced documentation update"',
  ]);
});

task('dev', async () => {
  console.log('🔥 Starting development environment...');
  await parallel([
    'task-master-ai watch --hot-reload',
    'npm run test -- --watch',
    'mcp:all',
  ]);
});

// === DEPLOYMENT & RELEASE ===

task('pre-release', async () => {
  console.log('🎯 Running pre-release checks...');
  await series([
    'build',
    'review',
    'docs',
    'npm run security-audit',
    'git tag -a v$(node -p "require(\'./package.json\').version")',
  ]);
});

task('deploy', async () => {
  console.log('🚀 Deploying Creative AI Studio 2025...');
  await series([
    'pre-release',
    'npm run deploy',
    'task-master-ai notify --success',
  ]);
});

// === CREATIVE WORKFLOWS ===

task('generate:assets', async () => {
  console.log('🎨 Running AI asset generation...');
  await parallel([
    'task-master-ai generate --images --batch=10',
    'task-master-ai generate --videos --batch=5',
    'task-master-ai generate --audio --batch=8',
  ]);
});

task('optimize:content', async () => {
  console.log('⚡ Optimizing generated content...');
  await series([
    'task-master-ai optimize --ai-enhance',
    'task-master-ai compress --smart',
    'git add assets/',
    'commit',
  ]);
});

module.exports = {
  availableTasks: [
    'build',
    'commit',
    'review',
    'docs',
    'dev',
    'mcp:creative',
    'mcp:orchestrator',
    'mcp:all',
    'pre-release',
    'deploy',
    'generate:assets',
    'optimize:content',
  ],
};
