# 🏷️ Field Type Microservice

This microservice is responsible for **changing the type of a sports field** (e.g., from 'cesped' to 'sintética') within the MiniCourt platform.

---

## 📌 Purpose
Allows modification of the `type` attribute of a sports field using its ID.

---

## 🔗 Endpoint

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| PATCH  | `/api/type/:id`  | Update field type by ID   |

Example request body:
```json
{
  "type": "sintética"
}
```

---

## ⚙️ Technologies

- Node.js
- Express.js
- MongoDB (local)
- Mongoose
- Docker / Docker Compose

---

## 🧱 Architecture Style

- **REST**

## 🧩 Backend Design Pattern

- **KISS (Keep It Simple, Stupid)**

---

## 🗂️ Folder Structure

field-type-ms/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # PATCH controller logic
│   ├── models/          # Field schema
│   ├── routes/          # Express route
│   └── services/        # Field type update logic
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── README.md

---

## 🐳 Running with Docker

```bash
# Build the image
docker build -t field-type-ms .

# Run with Docker Compose
docker-compose up
```

---

## 🧪 Testing

You can test the endpoint using Postman:

- Method: **PATCH**
- URL: `http://localhost:3004/api/type/<FIELD_ID>`
- Body (JSON): see example above

---

## 📡 External Communication

- None by default. Can be extended for triggering updates across availability modules.

---

## 🔍 Observability

- Logs print update status to console.
- External monitoring tools can be added later for better traceability.

---
