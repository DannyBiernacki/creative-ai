import { Server } from '@modelcontextprotocol/sdk/server/index.js';

describe('MCP Tool: echo_tool', () => {
  it('should echo the message', async () => {
    const server = new Server({
      name: 'creative-assets',
      version: '1.0.0',
      capabilities: { tools: {}, resources: {}, prompts: {} }
    });

    server.registerTool({
      name: 'echo_tool',
      description: 'Zwraca to, co otrzyma w polu message',
      inputSchema: {
        type: 'object',
        properties: { message: { type: 'string' } },
        required: ['message']
      },
      outputSchema: {
        type: 'object',
        properties: { echoed: { type: 'string' } },
        required: ['echoed']
      },
      handler: async ({ message }) => {
        return { echoed: message };
      }
    });

    // Symulacja wywołania narzędzia
    const result = await server.tools['echo_tool'].handler({ message: 'Hello MCP!' });
    expect(result).toEqual({ echoed: 'Hello MCP!' });
  });
}); 