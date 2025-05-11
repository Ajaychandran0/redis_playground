
# 🚀 Redis Playground

A Node.js + Docker-based playground to explore Redis features such as Pub/Sub, Streams, Lists, Sets, Geo, Bitmaps, HyperLogLog, and more. Designed for experimentation and learning Redis concepts interactively.

---

## 📦 Tech Stack

- **Redis** (via Docker)
- **Node.js** (`@redis/client`)
- **RedisInsight** (UI dashboard by Redis)
- **Redis Commander** (lightweight web UI)
- **Docker Compose** (multi-service setup)

---

## 🛠️ Setup

### 1. Clone the Repo

```bash
git clone <your-repo-url>
cd redis_playground
```

### 2. Start Redis + UI Tools

```bash
docker-compose up -d
```

This will start:

- Redis server (on `localhost:6379`)
- Redis Commander (on `http://localhost:8081`)
- RedisInsight (on `http://localhost:5540`)

### 3. Install Dependencies

```bash
npm install
```

---

## 🔧 Project Structure

```
.
├── docker-compose.yml      # Redis + UIs setup
├── publisher.js            # Redis Pub/Sub Publisher
├── subscriber.js           # Redis Pub/Sub Subscriber
├── producer.js             # Redis Streams Producer
├── consumer.js             # Redis Streams Consumer
├── write.js                # Insert data (strings, hashes, sets, etc.)
├── read.js                 # Read all Redis data types
└── README.md
```

---

## 🧪 Features

### ✅ Pub/Sub

- Publish messages to channels every 5 seconds.
- Multiple subscribers can listen concurrently.

### ✅ Redis Streams

- Stream producer/consumer logic with `XADD`, `XREAD`, etc.
- Learn real-time message processing flow.

### ✅ Basic Data Types

- **Strings**
- **Hashes**
- **Lists**
- **Sets**
- **Sorted Sets**
- **Bitmaps**
- **HyperLogLog**
- **Geo** (WIP)

### ✅ Redis UIs

- [RedisInsight](http://localhost:8001) – full-featured GUI by Redis
- [Redis Commander](http://localhost:8081) – lightweight visual key browser

---

## 💡 How to Use

### Run Pub/Sub

```bash
node subscriber.js
# In another terminal
node publisher.js
```

### Try Redis Streams

```bash
node consumer.js
# In another terminal
node producer.js
```

### Write and Read Data Types

```bash
node write.js
node read.js
```

Then open **RedisInsight** or **Redis Commander** to inspect data visually.

---

## ❓ Troubleshooting

- Make sure Docker is running.
- If RedisInsight doesn’t show data, manually add Redis at `localhost:6379`.
- Geo data may require debugging due to version differences in `@redis/client`.

---

## 📚 Future Ideas

- Add Lua scripts
- Implement caching strategies (LRU, TTL, etc.)
- Use RedisJSON and RediSearch
- Explore Redis Modules

---

Happy Redis Hacking! 🧠⚡
