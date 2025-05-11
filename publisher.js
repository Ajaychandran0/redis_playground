import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

const TOTAL_MESSAGES = 10;
const INTERVAL_MS = 5000;

let count = 0;

const interval = setInterval(async () => {
  count += 1;
  const message = `Message #${count} at ${new Date().toISOString()}`;

  await redis.publish('demo-channel', message);
  console.log(`[Publisher] Sent: ${message}`);

  if (count >= TOTAL_MESSAGES) {
    clearInterval(interval);
    await redis.quit();
    console.log('[Publisher] Done sending messages. Connection closed.');
  }
}, INTERVAL_MS);


