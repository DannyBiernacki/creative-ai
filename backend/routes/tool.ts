import type {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import { extractColorsFromImage } from '../tools/colorExtractor';
import fs from 'fs';
import path from 'path';

async function toolRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions,
) {
  server.post(
    '/extract-colors',
    async (request: FastifyRequest, reply: FastifyReply) => {
      // @ts-ignore
      const data = await request.file();
      if (!data) {
        return reply.status(400).send({ error: 'No file uploaded' });
      }
      const tempPath = path.join('/tmp', `${Date.now()}_${data.filename}`);
      await new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(tempPath);
        data.file.pipe(writeStream);
        data.file.on('end', resolve);
        data.file.on('error', reject);
      });
      try {
        const colors = await extractColorsFromImage(tempPath);
        fs.unlinkSync(tempPath);
        return reply.send({ colors });
      } catch (err) {
        fs.unlinkSync(tempPath);
        return reply.status(500).send({
          error: 'Color extraction failed',
          details: err instanceof Error ? err.message : String(err),
        });
      }
    },
  );
}

export default toolRoutes;
