import { Router } from 'express';
import {
  fetchAllStudents,
  fetchStudentById,
  addStudent,
  modifyStudent,
  removeStudent,
} from '../controllers/student.controller';

const router = Router();

router.get('/', fetchAllStudents);
router.get('/:id', fetchStudentById);
router.post('/', addStudent);
router.put('/:id', modifyStudent);
router.delete('/:id', removeStudent);

export default router;