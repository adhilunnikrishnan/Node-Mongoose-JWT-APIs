import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const authRoutes = express.Router({ mergeParams: true });

// ✅ POST /api/register
authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

export default authRoutes;
