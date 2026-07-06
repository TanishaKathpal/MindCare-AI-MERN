# 🧠 MindCare AI

An AI-powered Mental Wellness Platform built using the MERN Stack that helps users track their mood, maintain journals, analyze emotional trends, and receive AI-generated mental wellness insights.

---

## 🚀 Features

### 👤 User Authentication
- User Registration & Login
- JWT Authentication
- Protected Routes
- Role-Based Access (User/Admin)

### 😊 Mood Tracker
- Record Daily Mood
- Update/Delete Mood Entries
- Prevent Multiple Entries per Day

### 📖 Journal
- Create Personal Journal Entries
- Edit & Delete Journals
- Secure User-Specific Data

### 📊 Analytics Dashboard
- Mood Distribution
- Weekly Mood Trends
- Journal Statistics
- Interactive Charts

### 🤖 AI Insights
- AI-powered Mood Analysis
- Personalized Mental Wellness Suggestions
- Uses Groq AI API

### ⚙️ Profile & Settings
- Update Profile
- Change Password
- Delete Account
- Notification Settings
- Theme Preferences
- About MindCare AI

### 👨‍💼 Admin Panel
- View Platform Statistics
- Manage Users
- Update User Roles
- Delete Users

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Recharts

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## AI
- Groq API (Llama Model)

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# 📁 Project Structure

```
MindCare-AI
│
├── client
│   ├── src
│   ├── pages
│   ├── services
│   ├── routes
│   ├── components
│   └── assets
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── utils
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/TanishaKathpal/MindCare-AI-MERN.git
```

---

## Install Dependencies

### Backend

```bash
cd MindCare-AI/server
npm install
```

### Frontend

```bash
cd MindCare-AI/client
npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

For production:

```env
VITE_API_URL=https://mindcare-ai-mern.onrender.com/api
```

---

# ▶ Running the Project

### Backend

```bash
npm run dev
```

Runs on

```
http://localhost:5000
```

### Frontend

```bash
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 🌐 Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

---

# 📸 Screens

- Landing Page
- Login / Register
- Dashboard
- Mood Tracker
- Journal
- Analytics
- AI Insights
- Profile
- Settings
- Admin Dashboard

---

# 📚 Future Improvements

- Email Notifications
- Mood Reminder Scheduler
- Chatbot for Mental Wellness
- Dark Mode
- PDF Report Export
- Community Support
- Emergency Contact Feature
- Talk To Counsellors

---


# ⭐ If you like this project

Give it a ⭐ on GitHub!
