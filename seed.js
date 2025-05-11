import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

// String
await redis.set('user:1:name', 'Alice');

// List
await redis.rPush('tasks', ['Task 1', 'Task 2', 'Task 3']);

// Set
await redis.sAdd('tags', ['redis', 'database', 'nosql']);

// Hash
await redis.hSet('user:1', {
  name: 'Alice',
  age: '30',
  country: 'USA'
});

// Sorted Set
await redis.zAdd('leaderboard', [
  { score: 100, value: 'Alice' },
  { score: 150, value: 'Bob' },
  { score: 120, value: 'Charlie' }
]);

// Stream
await redis.xAdd('mystream', '*', {
  sensor_id: '1234',
  temperature: '19.8'
});

// Bitmap
await redis.setBit('feature_flags', 7, 1);

// HyperLogLog
await redis.pfAdd('unique_visitors', ['user1', 'user2', 'user3']);

// GEO
await redis.geoAdd('cities', {
  longitude: 13.361389,
  latitude: 38.115556,
  member: 'Palermo'
});

console.log('✅ Data seeded!');
await redis.quit();
