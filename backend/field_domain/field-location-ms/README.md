# 📍 Field Location Microservice

This microservice is responsible for **modifying the location details of a sports field** in the MiniCourt platform.

---

## 📌 Purpose
Updates the city, sector, and/or address of a field using its unique ID.

---

## 🔗 Endpoint

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| PATCH  | `/api/location/:id`  | Update location of a field   |

Example request body:
```json
{
  "location": {
    "city": "Quito",
    "sector": "Sur",
    "address": "Av. Pedro Vicente Maldonado y Moran Valverde"
  }
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

field-location-ms/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # PATCH controller logic
│   ├── models/          # Field schema
│   ├── routes/          # Express route
│   └── services/        # Location update logic
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── README.md

---

## 🐳 Running with Docker

```bash
# Build the image
docker build -t field-location-ms .

# Run with Docker Compose
docker-compose up
```

---

## 🧪 Testing

You can test the endpoint using Postman:

- Method: **PATCH**
- URL: `http://localhost:3003/api/location/<FIELD_ID>`
- Body (JSON): see example above

---

## 📡 External Communication

- No current external calls. Can be linked to mapping or availability services in future.

---

## 🔍 Observability

- Console logs available on update actions.
- Observability stack recommended for production use.

---
