# 🎯 Cursor-Based Event Management API

A production-ready RESTful API built with **Node.js**, **Express**, **PostgreSQL**, and **Prisma** for managing events and user registrations. This API features **cursor-based pagination**, **robust business rules**, and **concurrent-safe registration** logic — ideal for large-scale event platforms.

---

## 📂 Folder Structure

```
.
├── prisma/              # Prisma schema and migrations
├── src/
│   ├── controllers/     # Route logic
│   ├── services/        # Business logic
│   ├── routes/          # Express routers
│   ├── middlewares/     # Error & validation handlers
│   ├── utils/           # Helpers like pagination, sorting
│   └── index.js         # Entry point
├── .env
├── README.md
└── package.json
```

---

## 🚀 Setup Instructions

### 🔧 Prerequisites
- Node.js `>=18`
- PostgreSQL `>=13`
- Prisma ORM

### 📥 Installation

```bash
git clone https://github.com/sreyangshu05/event-management-api.git
cd event-management-api
npm install
```

### 🔐 Environment Variables
Create a `.env` file in the root:

```
DATABASE_URL=postgresql://user:password@localhost:5432/yourdbname
PORT=5000
```

### 🛠️ Run the API

```bash
npx prisma migrate dev --name init
npm run dev
```

API will run on: [http://localhost:3000](http://localhost:3000)

---

## 📘 API Endpoints Overview

### 1. Create Event
**POST** `/events`

**Request**
```json
{
  "title": "Node Conf 2025",
  "datetime": "2025-08-01T10:00:00.000Z",
  "location": "Kolkata",
  "capacity": 500
}
```
**Response**
```json
{ "eventId": "uuid1234" }
```

### 2. Get Event Details
**GET** `/events/:id`

**Response**
```json
{
  "id": "uuid1234",
  "title": "Node Conf 2025",
  "registeredUsers": [
    { "id": "user1", "name": "Sreyangshu" }
    // ...
  ]
}
```

### 3. Register for Event
**POST** `/events/:id/register`

**Request**
```json
{ "name": "Alice Johnson", "email": "alice@example.com" }
```
**Response**
```json
{ "message": "Registration successful." }
```

### 4. Cancel Registration
**DELETE** `/events/:id/cancel/:userId`

**Response**
```json
{ "message": "Registration cancelled." }
```

### 5. Upcoming Events with Cursor-Based Pagination
**GET** `/events/upcoming?cursor=uuid123&limit=5`

**Response**
```json
{
  "events": [ /* ... */ ],
  "nextCursor": "uuid124"
}
```

### 6. Event Statistics
**GET** `/events/:id/stats`

**Response**
```json
{
  "totalRegistrations": 320,
  "remainingCapacity": 180,
  "percentageUsed": "64%"
}
```

---

## 🔒 Business Logic Rules
- ⛔ No double registration per event
- 📆 No registration for past events
- 🧍 Limit per event enforced (max 1000)
- ⚠️ Meaningful HTTP errors on failure
- ✅ Concurrent registration-safe using Prisma $transaction

---

## ✨ Highlights
- ✅ Cursor-based pagination for high performance
- 🔐 Validation & error middleware
- 🧠 Business rules enforced at DB + code level
- ⚙️ Clean service/controller architecture
- 📊 Stat endpoints for admins

---

## 🧪 Testing (Optional)

```bash
npm test
```
Use tools like Postman or Thunder Client for testing endpoints.

---

## 🤝 Contributing
Want to enhance this API or fix bugs? Pull requests are welcome! Fork the repo, make your changes, and submit a PR.

---

## 🙌 Developed By
Sreyangshu Sarkar  
💼 Full-Stack Developer | MERN & Python  
📧 sreyangshusarkar@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/sreyangshu-sarkar/) | [GitHub](https://github.com/sreyangshu05)

---

### ✅ Tips for GitHub Repository Cleanliness
- 🔁 Use **atomic commits** with meaningful messages
- 🧹 Run `eslint` / `prettier` for consistent code style
- 🧪 Write some tests for business logic in `/tests`
- 📊 Add a `swagger.json` or use `Postman collection` for bonus points 