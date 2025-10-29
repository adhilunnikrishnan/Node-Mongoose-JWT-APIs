import express from "express";
import {
  addStudent,
  deleteStudent,
  getStudentMarks,
  getStudents,
  updateStudent,
} from "../controllers/studentController.js";
import { createStudentValidation, studentUpdateValidation } from "../validations/studentValidation.js";
import { validate } from "../middleware/validationMiddleware.js";

const studentRoutes = express.Router();

// ✅ POST → Add new student (protected + validated)
studentRoutes.post("/", validate(createStudentValidation), addStudent);

studentRoutes.get("/", getStudents);

// ✅ GET → Marks of a specific student (protected)
studentRoutes.get("/:id/marks", getStudentMarks);

// ✅ PUT → Update student info (protected)
studentRoutes.patch("/:id",validate(studentUpdateValidation), updateStudent);

// ✅ DELETE → Delete student (admin only)
studentRoutes.delete("/:id", deleteStudent);

export default studentRoutes;
