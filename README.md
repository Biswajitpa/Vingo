<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,16,20&height=200&section=header&text=Vingo&fontSize=80&fontColor=ffffff&desc=Real-Time%20Food%20Delivery%20Platform&descAlignY=65&descSize=20&animation=fadeIn" width="100%"/>

<p>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=FF4D2D&center=true&vCenter=true&width=600&lines=Connecting+customers%2C+shop+owners+%26+riders...;Live+order+tracking+with+Socket.io;Secure+OTP-verified+deliveries;Built+with+the+MERN+stack" alt="Typing SVG" />
</p>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-vingo--sage.vercel.app-ff4d2d?style=for-the-badge)](https://vingo-sage.vercel.app)
[![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)]()
[![Made in India](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20in-India-ff9933?style=for-the-badge)]()

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com)

</div>

<br/>

## 📖 About

**Vingo** is a full-stack, real-time food delivery platform built on the MERN stack. It brings together three distinct user roles — **customers**, **shop owners**, and **delivery partners** — in one connected ecosystem, with live order tracking, instant Socket.io notifications, and secure OTP-verified handoffs at every step of the journey, from cart to doorstep.

Whether you're craving a quick bite or running the kitchen, Vingo keeps everyone in sync — in real time.

<br/>

## ✨ Features

<table>
<tr>
<td width="33%" valign="top">

### 🛍️ Customer
- 📍 Browse shops & items by city/location
- 🛒 Smart cart & multi-shop checkout
- 🗺️ Interactive map-based address picker
- 💳 Pay via COD or Razorpay (UPI/Card)
- 📦 Live order tracking on map
- 💬 In-app chat with delivery partner
- 🔐 OTP-verified delivery confirmation
- 📜 Full order history & status updates

</td>
<td width="33%" valign="top">

### 🏪 Shop Owner
- 🏬 Create & manage shop profile
- 🍕 Add / edit / remove menu items
- ☁️ Image uploads via Cloudinary
- 🔔 Real-time new order alerts
- 🔄 Update order status live
  (preparing → out for delivery → delivered)
- 📊 Earnings & order statistics dashboard

</td>
<td width="33%" valign="top">

### 🛵 Delivery Partner
- 📡 Real-time nearby delivery assignments
- ✅ Accept available orders
- 🛰️ Live GPS broadcasting during delivery
- 🔑 OTP verification to confirm delivery
- 💰 Daily earnings dashboard
- 📈 Delivery stats with charts

</td>
</tr>
</table>

### 🌐 Platform-Wide

| Capability | Details |
|---|---|
| 🔐 **Role-based Auth** | Customer / Owner / Delivery Boy, with protected routes per role |
| 🔓 **Flexible Sign-in** | Email + password, plus Google OAuth |
| 📧 **OTP Password Reset** | Secure email-based account recovery |
| 🍪 **Persistent Sessions** | Secure, HTTP-only, cross-site cookies (JWT-based) |
| ⚡ **Real-Time Everything** | Orders, assignments, GPS, and chat — all live via Socket.io |
| 📱 **Responsive UI** | Smooth, animated experience across desktop and mobile |

<br/>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|:---|:---|
| 🎨 **Frontend** | React · Vite · Redux Toolkit · React Router DOM · Tailwind CSS · Framer Motion · React Leaflet (OpenStreetMap) · Recharts · Socket.io Client · Axios |
| ⚙️ **Backend** | Node.js · Express · MongoDB · Mongoose · Socket.io · JWT · bcryptjs |
| 🔌 **Third-Party Services** | Cloudinary (images) · Razorpay (payments) · Resend (email/OTP) · Geoapify (geocoding) · Firebase (Google Auth) |
| ☁️ **Deployment** | Vercel (frontend) · Render (backend) · MongoDB Atlas (database) |

</div>

<br/>

## 📁 Project Structure

```
vingo/
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/      ── Nav, Footer, Dashboards, Cards, Chat, Tracking
│   │   ├── pages/            ── SignIn, SignUp, Home, CheckOut, MyOrders...
│   │   ├── redux/             ── user slice, map slice
│   │   ├── hooks/             ── useGetCurrentUser, useGetCity, useGetMyShop...
│   │   └── App.jsx
│   └── package.json
│
└── ⚙️ backend/
    ├── controllers/         ── auth, order, shop, item, user
    ├── models/                ── Mongoose schemas
    ├── routes/                ── Express routers
    ├── utils/                  ── mail, token, cloudinary helpers
    ├── config/                ── DB connection
    ├── socket.js              ── Real-time event handlers
    ├── index.js                ── App entry point
    └── package.json
```

<br/>

## 🚀 Getting Started Locally

### ✅ Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB instance)
- API keys/accounts for: Cloudinary, Razorpay, Resend, Geoapify, Firebase

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/vingo.git
cd vingo
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Run it:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:
```env
VITE_API_URL=http://localhost:8000
VITE_GEOAPIKEY=your_geoapify_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Run it:
```bash
npm run dev
```

🎉 **The app will be live at `http://localhost:5173`**

<br/>

## 🔑 Authentication Roles

When signing up, users select one of three roles:

| Role value (stored in DB) | Who | Access |
|---|---|---|
| `user` | 🧑 Customer | Browses shops, places orders, tracks deliveries |
| `owner` | 🏪 Shop Owner | Manages menu, accepts/updates incoming orders |
| `deliveryBoy` | 🛵 Delivery Partner | Accepts and completes deliveries |

> ⚠️ **Note:** Role values are case-sensitive (`deliveryBoy`, not `DeliveryBoy`) and must match exactly between the frontend and the backend's Mongoose schema enum.

<br/>

## 📡 Real-Time Events (Socket.io)

| Event | Direction | Description |
|---|---|---|
| `newOrder` | Server → Owner | Notifies shop owner of a new incoming order |
| `newAssignment` | Server → Delivery Partner | Notifies nearby delivery partners of an available delivery |
| `updateLocation` | Delivery Partner → Server | Broadcasts the delivery partner's live GPS position |
| `update-status` | Server → Customer | Pushes order status changes to the customer |

<br/>

## 🗺️ Order Flow

```mermaid
flowchart LR
    A[🧑 Customer] -->|Places Order| B[⚙️ Backend API]
    B -->|Saves Order| C[(🍃 MongoDB)]
    B -->|Notifies| D[🏪 Shop Owner]
    D -->|Marks Out for Delivery| B
    B -->|Broadcasts Assignment| E[🛵 Delivery Partner]
    E -->|Accepts + Shares GPS| B
    B -->|Live Updates| A
    E -->|Confirms via OTP| B
    B -->|Sends Email| F[📧 Resend]
```

<br/>

## 🧭 Roadmap

- [ ] Push notifications for order updates
- [ ] Ratings & reviews for shops and delivery partners
- [ ] Multi-language support
- [ ] Admin panel for platform-wide analytics
- [ ] Scheduled/pre-orders

<br/>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues) or open a pull request.

<br/>

## 📄 License

This project is built for educational and personal portfolio purposes.

<br/>

<div align="center">

### 👤 Author

**Biswajit Pattanaik**

[![Portfolio](https://img.shields.io/badge/Portfolio-View-ff4d2d?style=for-the-badge)]()
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)]()

Made with ❤️ in India

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,16,20&height=100&section=footer" width="100%"/>

</div>
