# 🏟️ Field Registration Microservice

This microservice is responsible for **creating new sports fields** within the MiniCourt platform.

---

## 📌 Purpose
Registers a new field into the MongoDB database. This is part of the **Field Management Domain**, which handles the complete lifecycle of sports fields.

---

## 🔗 Endpoint

| Method | Endpoint | Description       |
|--------|----------|-------------------|
| POST   | `/api/fields` | Create a new field |

Example request body:
```json
{
  "name": "Cancha La Bombonera",
  "location": {
    "city": "Quito",
    "sector": "Norte",
    "address": "Av. Amazonas y NNUU"
  },
  "type": "cesped",
  "capacity": 12
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

field-registration-ms/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # Route controller logic
│   ├── models/          # Field schema
│   ├── routes/          # Express route
│   └── services/        # Business logic
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── README.md

---

## 🐳 Running with Docker

```bash
# Build the image
docker build -t field-registration-ms .

# Run with Docker Compose
docker-compose up
```

---

## 🧪 Testing

You can test the endpoint using Postman:

- Method: **POST**
- URL: `http://localhost:3000/api/fields`
- Body (JSON): see example above

---

## 📡 External Communication

- Triggers a **WebHook** to `availability-scheduler-ms` once a field is registered. *(To be configured manually or via event call)*

---

## 🔍 Observability

- Logs printed to console. Integration with centralized logging (e.g., Logstash or Promtail) is suggested for production.

---




