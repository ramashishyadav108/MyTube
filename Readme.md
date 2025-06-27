# 🛠️ MyTube – A YouTube-style Backend Service

A feature-rich **video hosting backend** inspired by modern backend architecture. Built with **Node.js**, **Express**, **MongoDB**, **Mongoose**, **JWT**, and **bcrypt**.

---

## 🧩 Project Features

Here are the core features implemented in the project:

- **User Authentication**  
  - Signup/login with encrypted passwords using `bcrypt`  
  - JWT-based access & refresh tokens for secure auth  
- **Video Management**  
  - Upload and store video metadata  
  - Like, dislike, comment, reply  
  - Subscribe/unsubscribe to channels  
- **Secure Architecture**  
  - JWT verification and route protection middleware  
  - Input validation and error handling  
- **Scalable Project Structure**  
  - MVC-based folder architecture  
  - Organized controllers, models, routes, and middlewares  

---

## 📂 Folder Structure

The project is organized as follows:

```
MyTube/
  ├── src/
  │   ├── controllers/        # Request handlers  
  │   ├── models/             # MongoDB schemas  
  │   ├── routes/             # Express routers  
  │   ├── middlewares/        # Auth, error handling  
  │   ├── utils/              # Helpers, token logic  
  │   ├── config/             # DB & environment configs  
  │   └── server.js           # Express app + route setup  
  ├── public/                 # Uploaded files/static assets  
  ├── .env.sample             # Required environment variables  
  ├── .gitignore              
  ├── package.json            
  └── README.md
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally:

### 1. Prerequisites

- Node.js ≥ 14.x  
- npm or Yarn  
- MongoDB (local or MongoDB Atlas)

### 2. Installation

```bash
git clone https://github.com/ramashishyadav108/MyTube.git
cd MyTube
npm install
cp .env.sample .env
```

### 3. Configure `.env`

Fill the required fields in `.env` file:

```
PORT=8000
MONGODB_URI=your-mongo-uri
JWT_SECRET=your-secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
```

### 4. Run the Server

```bash
npm run dev
# or
npm start
```

Server will start at `http://localhost:8000`.

---


## 🔒 Security & Best Practices

To ensure a secure and scalable backend:

- Passwords are hashed using `bcrypt` before storing in DB  
- JWT tokens used for access (short-lived) and refresh (long-lived) sessions  
- Authentication middleware protects private routes  
- Centralized error handler sends consistent error responses  
- `.env` file secures environment-specific secrets and config

---

## 📚 Key Learning Takeaways

This project helps you understand:

- Express.js routing and middleware chaining  
- Authentication using JWT in Node.js  
- MongoDB schema design with Mongoose  
- Error handling and response structuring  
- Clean project structuring for real-world APIs
