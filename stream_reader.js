import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

const messages = await redis.xRead([{ key: 'video-stream', id: '0' }], {
  COUNT: 10,
  BLOCK: 2000,
});
console.log(messages);
await redis.quit();
