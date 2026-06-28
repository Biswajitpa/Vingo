# Vingo 🍔

A full-stack food delivery platform connecting customers, restaurant owners, and delivery partners in real time. Built with the MERN stack, Socket.io for live tracking, and Razorpay for payments.

**Live Demo:** [vingo-sage.vercel.app](https://vingo-sage.vercel.app)

---

## ✨ Features

### For Customers
- Browse shops and food items by city/location
- Add items to cart and checkout with an interactive map-based delivery address picker
- Pay via Cash on Delivery or online (UPI / Credit / Debit Card via Razorpay)
- Track delivery in real time on a live map
- View order history and order status updates
- In-app chat with the assigned delivery partner
- OTP-based delivery confirmation for security

### For Shop Owners
- Create and manage shop profile
- Add, edit, and remove menu items (with image uploads via Cloudinary)
- Receive new orders in real time via Socket.io
- Update order status (preparing → out for delivery → delivered)
- Dashboard with earnings and order statistics

### For Delivery Partners
- Receive nearby delivery assignments in real time, based on geolocation
- Accept available orders
- Live GPS tracking shared with the customer during delivery
- OTP verification to confirm successful delivery
- Daily earnings and delivery stats dashboard

### Platform-wide
- Role-based authentication (Customer / Owner / Delivery Boy)
- Email + password signup/signin, plus Google OAuth
- OTP-based password reset
- Persistent sessions via secure HTTP-only cookies
- Real-time updates across all roles via Socket.io

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite
- Redux Toolkit (state management)
- React Router DOM
- Tailwind CSS
- Framer Motion (animations)
- React Leaflet + OpenStreetMap (maps)
- Recharts (dashboard charts)
- Socket.io Client
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Socket.io (real-time communication)
- JWT (authentication)
- bcryptjs (password hashing)
- Cloudinary (image storage)
- Razorpay (payment processing)
- Resend (transactional email/OTP delivery)
- Geoapify (geocoding for addresses)

**Deployment**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure

```
vingo/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components (Nav, Footer, Dashboards, Cards, etc.)
│   │   ├── pages/            # Route-level pages (SignIn, SignUp, Home, CheckOut, etc.)
│   │   ├── redux/             # Redux slices (user, map, etc.)
│   │   ├── hooks/             # Custom hooks (useGetCurrentUser, useGetCity, etc.)
│   │   └── App.jsx
│   └── package.json
│
└── backend/
    ├── controllers/         # Route handlers (auth, order, shop, item, user)
    ├── models/                # Mongoose schemas
    ├── routes/                # Express routers
    ├── utils/                 # Helpers (mail, token, cloudinary)
    ├── config/                # DB connection
    ├── socket.js              # Socket.io event handlers
    ├── index.js               # App entry point
    └── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB instance)
- Accounts/API keys for: Cloudinary, Razorpay, Resend, Geoapify, Firebase (for Google Auth)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/vingo.git
cd vingo
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
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

Run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:
```env
VITE_API_URL=http://localhost:8000
VITE_GEOAPIKEY=your_geoapify_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Run the frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔐 Authentication Roles

When signing up, users select one of three roles:
| Role value (stored in DB) | Description |
|---|---|
| `user` | Customer — browses shops, places orders |
| `owner` | Shop owner — manages menu and incoming orders |
| `deliveryBoy` | Delivery partner — accepts and delivers orders |

---

## 📡 Real-Time Events (Socket.io)

| Event | Description |
|---|---|
| `newOrder` | Notifies shop owner of a new incoming order |
| `newAssignment` | Notifies nearby delivery partners of an available delivery |
| `updateLocation` | Delivery partner's live GPS position |
| `update-status` | Order status change pushed to the customer |

---

## 📄 License

This project is for educational/personal portfolio purposes.

---

## 👤 Author

**Biswajit Pattanaik**
