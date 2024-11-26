import { Router } from 'express';
import {
  fetchAllCourses,
  fetchCourseById,
  addCourse,
  modifyCourse,
  removeCourse,
} from '../controllers/course.controller';

const router = Router();

router.get('/', fetchAllCourses);
router.get('/:id', fetchCourseById);
router.post('/', addCourse);
router.put('/:id', modifyCourse);
router.delete('/:id', removeCourse);

export default router;