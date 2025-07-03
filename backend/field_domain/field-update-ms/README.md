# 🛠️ Field Update Microservice

This microservice is responsible for **updating sports field information** within the MiniCourt platform.

---

## 📌 Purpose
Allows authorized users or administrators to update existing data of a registered sports field, such as name, capacity, type, or location.

---

## 🔗 Endpoint

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| PUT    | `/api/fields/:id` | Update a field by its ID |

Example request body:
```json
{
  "name": "Cancha La Bombonera Renovada",
  "type": "sintética",
  "capacity": 14
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

field-update-ms/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # PUT controller logic
│   ├── models/          # Field schema
│   ├── routes/          # Express route
│   └── services/        # Update logic
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── README.md

---

## 🐳 Running with Docker

```bash
# Build the image
docker build -t field-update-ms .

# Run with Docker Compose
docker-compose up
```

---

## 🧪 Testing

You can test the endpoint using Postman:

- Method: **PUT**
- URL: `http://localhost:3001/api/fields/<FIELD_ID>`
- Body (JSON): see example above

---

## 📡 External Communication

- Currently internal only. Can be extended to notify services in other domains (e.g., calendar-sync-ms).

---

## 🔍 Observability

- Console logs available for update success or failure.
- Suggested: Add integration with a monitoring system such as Prometheus, ELK, or Loki for production environments.

---
