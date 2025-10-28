import express from 'express';
import { addStudent, deleteStudent, getStudentMarks, getStudents, updateStudent } from '../controllers/studentController.js';

const studentRoutes = express.Router();

// ✅ POST → Add new student (protected + validated)
studentRoutes.post('/', addStudent);
studentRoutes.get('/', getStudents);
// ✅ GET → Marks of a specific student (protected)
studentRoutes.get('/:id/marks',getStudentMarks);

// ✅ PUT → Update student info (protected)
studentRoutes.patch('/:id',updateStudent);


// ✅ DELETE → Delete student (admin only)
studentRoutes.delete('/:id',deleteStudent);

export default studentRoutes;