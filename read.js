import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

console.log('\n📦 Reading Redis Data Types:\n');

// 1. String
const name = await redis.get('user:1:name');
console.log('🔹 String: user:1:name =', name);

// 2. List
const tasks = await redis.lRange('tasks', 0, -1);
console.log('🔹 List: tasks =', tasks);

// 3. Set
const tags = await redis.sMembers('tags');
console.log('🔹 Set: tags =', tags);

// 4. Hash
const userHash = await redis.hGetAll('user:1');
console.log('🔹 Hash: user:1 =', userHash);

// 5. Sorted Set
const leaderboard = await redis.zRangeWithScores('leaderboard', 0, -1, { REV: true });
console.log('🔹 Sorted Set: leaderboard =', leaderboard);

// 6. Stream
const streamMessages = await redis.xRange('mystream', '-', '+');
console.log('🔹 Stream: mystream =', streamMessages.map(entry => ({
    id: entry.id,
    values: entry.message
})));

// 7. Bitmap
const featureBit = await redis.getBit('feature_flags', 7);
console.log('🔹 Bitmap: Bit 7 of feature_flags =', featureBit);

// 8. HyperLogLog
const uniqueCount = await redis.pfCount('unique_visitors');
console.log('🔹 HyperLogLog: unique_visitors =', uniqueCount);

// 9. GEO 
// const nearbyCities = await redis.geoSearch('cities', {
//     from: {
//         type: 'lonlat',
//         coordinates: [13.36, 38.11],
//     },
//     by: {
//         type: 'radius',
//         value: 100,
//         unit: 'km',
//     },
// });
// console.log('🔹 GEO: cities within 100km =', nearbyCities);



await redis.quit();
