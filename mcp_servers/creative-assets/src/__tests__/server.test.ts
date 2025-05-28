import { Server } from '@modelcontextprotocol/sdk/server/index.js';

describe('MCP Creative Assets Server', () => {
  it('should initialize with correct name', () => {
    const server = new Server({ name: 'creative-assets', version: '1.0.0', capabilities: {} });
    expect(server.options.name).toBe('creative-assets');
  });
}); 