# Admin API Documentation

This document describes the available endpoints for the **Admin Service**.

## Base URL

```
/admin
```

---

## 📘 Endpoints

### 🔹 GET `/admin/users`
Retrieve the list of all users.

**Response:**
```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
]
```

---

### 🔹 POST `/admin/users`
Add a new user.

**Request Body:**
```json
{
  "name": "Alice Green",
  "email": "alice@example.com"
}
```

**Response:**
```json
{
  "id": 3,
  "name": "Alice Green",
  "email": "alice@example.com"
}
```

---

### 🔹 DELETE `/admin/users/:id`
Delete a user by ID.

**Example:**
```
DELETE /admin/users/2
```

**Response:**
```
204 No Content
```

---

## 🛡️ Notes
- All endpoints accept and return `application/json`.
- No authentication required in this version (for local testing).

---

© XYZ Technologies – Admin Service