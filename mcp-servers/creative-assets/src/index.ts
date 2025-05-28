import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({
  name: 'creative-assets',
  version: '1.0.0',
  capabilities: {
    tools: {},
    resources: {},
    prompts: {},
  },
});

// Tool handlers will be registered here
