# 🖼️ Field Image Microservice

This microservice is responsible for **adding or updating an image associated with a sports field** in the MiniCourt platform.

---

## 📌 Purpose
Allows attaching or updating an image URL to an existing field by its ID.

---

## 🔗 Endpoint

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| PATCH  | `/api/image/:id` | Add or update field image  |

Example request body:
```json
{
  "imageUrl": "https://example.com/images/field1.jpg"
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

field-image-ms/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # PATCH controller logic
│   ├── models/          # Field schema
│   ├── routes/          # Express route
│   └── services/        # Image update logic
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── README.md

---

## 🐳 Running with Docker

```bash
# Build the image
docker build -t field-image-ms .

# Run with Docker Compose
docker-compose up
```

---

## 🧪 Testing

You can test the endpoint using Postman:

- Method: **PATCH**
- URL: `http://localhost:3002/api/image/<FIELD_ID>`
- Body (JSON): see example above

---

## 📡 External Communication

- None by default. Can be extended to trigger notifications or audit logs.

---

## 🔍 Observability

- Console logs available to track image update status.
- Suggested integration with monitoring stack (Prometheus, ELK, etc.)

---
