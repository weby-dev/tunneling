# Sum App

A basic Node.js + Express application with a frontend that takes two numbers as input and returns their sum.

## 🛠️ Features

- HTML frontend form
- Backend API using Express
- Parses form input and returns the sum

## 📁 Project Structure

- `server.js` – Express server
- `package.json` – Project metadata and dependencies
- `public/`
  - `index.html` – Frontend form

## 🚀 How to Run

1. Clone or download the project

2. Install dependencies

```bash
npm install

npm start

http://localhost:3000
```

# 🔗 Tunneling with ngrok

**ngrok** is a reverse proxy tool that creates secure tunnels from your local machine to the public internet. It is commonly used for local development, testing webhooks, or exposing local servers temporarily.

---

## 📌 What is ngrok?

ngrok allows you to expose a local port (e.g., your web server) to the internet via a secure public URL. It creates a tunnel from your local device to an ngrok server, which forwards external requests back to your local port.

---

## ⚙️ How It Works

1. You run a local server on a port (e.g., `localhost:3000`).
2. You start ngrok with that port.
3. ngrok gives you a public URL (e.g., `https://abcd1234.ngrok.io`).
4. Any request to that URL is tunneled to your local server.

---

## 🚀 Getting Started

### 1. Install ngrok

Download from [https://ngrok.com/download](https://ngrok.com/download) or install via terminal:

```bash
ngrok config add-authtoken <your_auth_token>

ngrok http 3000
