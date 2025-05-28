import Fastify from 'fastify';

const server = Fastify();

server.get('/', async (request, reply) => {
  return { message: 'Creative AI Studio 2025 – Fastify backend działa!' };
});

const start = async () => {
  try {
    await server.listen({ port: 4000, host: '0.0.0.0' });
    console.log('🚀 Fastify backend running on http://localhost:4000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start(); 