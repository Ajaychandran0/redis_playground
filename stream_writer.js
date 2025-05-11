import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

await redis.xAdd('video-stream', '*', { videoId: '123', action: 'encode' });
console.log('Stream entry added.');
await redis.quit();
