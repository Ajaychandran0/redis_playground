import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

await redis.subscribe('demo-channel', (message) => {
  console.log(`[Subscriber] Received: ${message}`);
});
