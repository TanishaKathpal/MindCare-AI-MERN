import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Mood from "../pages/Mood/Mood";
import Journal from "../pages/Journal/Journal";
import Profile from "../pages/Profile/Profile";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
                <ProtectedRoute>
                <Dashboard />
                </ProtectedRoute> }/>
        <Route path="/mood" element={<Mood />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;