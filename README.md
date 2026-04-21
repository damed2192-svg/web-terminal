# 🚀 DevOS - Mini Cloud Development Platform

DevOS là một hệ thống mô phỏng môi trường phát triển từ xa (cloud development environment), cho phép người dùng sử dụng terminal trực tiếp trên trình duyệt để thực thi lệnh Bash và code Python.

Dự án được xây dựng với kiến trúc tách biệt giữa frontend, backend và runner service, giúp dễ dàng mở rộng và mô phỏng hệ thống thực tế.

---

## ✨ Tính năng chính

* 💻 Terminal chạy trực tiếp trên trình duyệt (xterm.js)
* ⚡ Thực thi lệnh Bash và Python theo thời gian thực
* 🔒 Sandbox cơ bản (giới hạn thời gian, tài nguyên)
* 🔄 Quản lý session người dùng (UUID)
* 🌐 Kiến trúc microservice đơn giản

---

## 🏗️ Kiến trúc hệ thống

```
User (Browser)
     ↓
Frontend (React + xterm.js)
     ↓
Backend (FastAPI API)
     ↓
Runner Service (Execute Code)
```

---

## 📦 Cấu trúc dự án

```
devos/
│
├── backend/      # FastAPI server
├── frontend/     # React UI + Terminal
├── runner/       # Code execution engine
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Công nghệ sử dụng

* **Frontend**: React, xterm.js, Axios
* **Backend**: FastAPI, httpx
* **Runner**: Python subprocess + resource limit
* **Containerization**: Docker, Docker Compose

---

## 🚀 Cách chạy dự án

### 1. Clone repository

```
git clone https://github.com/your-username/devos.git
cd devos
```

### 2. Build và chạy bằng Docker

```
docker-compose up --build
```

### 3. Truy cập hệ thống

* 🌐 Frontend: http://localhost:3000
* ⚙️ Backend API: http://localhost:8000
* 🧠 Runner Service: http://localhost:5001

---

## 🧪 Ví dụ sử dụng

### Chạy lệnh Bash

```
echo Hello DevOS
```

### Chạy Python

```
print("Hello from DevOS")
```

👉 Output sẽ hiển thị ngay trên terminal.

---

## 🔒 Sandbox

Runner service sử dụng:

* Giới hạn CPU time
* Giới hạn memory
* Timeout execution

Giúp tránh việc chạy code gây treo hệ thống.

---

## 📌 Mục tiêu dự án

* Mô phỏng nền tảng cloud development
* Hiểu kiến trúc microservice cơ bản
* Thực hành giao tiếp giữa các service (API ↔ Runner)
* Xây dựng hệ thống thực thi code an toàn ở mức cơ bản

---

## 👥 Team

* Backend Developers (FastAPI)
* Frontend Developers (React)
* System Engineers (Runner & Sandbox)
* DevOps (Docker, Deploy)
* Documentation

---

## 📷 Demo

> (Thêm GIF hoặc video demo tại đây để tăng độ chuyên nghiệp)

---

## 🧠 Ghi chú

Dự án được xây dựng với mục đích học tập và mô phỏng hệ thống thực tế, chưa phù hợp cho production.

---

## 📄 License

MIT License
