import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import toolRoutes from './routes/tool';

const server = Fastify({ logger: true });

server.register(multipart);
server.register(toolRoutes, { prefix: '/tool' });

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('MCP Server running on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
