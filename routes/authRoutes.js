import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { validate } from "../middleware/validationMiddleware.js";
import { registerValidation } from "../validations/authValidation.js";

const authRoutes = express.Router({ mergeParams: true });

// ✅ POST /api/register
authRoutes.post("/register", validate(registerValidation), registerUser);

authRoutes.post("/login", loginUser);

export default authRoutes;
