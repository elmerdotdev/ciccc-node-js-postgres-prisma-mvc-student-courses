import { Router } from 'express';
import { enrollStudent, unenrollStudent } from '../controllers/student_courses.controller';

const router = Router();

router.post('/enroll', enrollStudent);
router.delete('/unenroll', unenrollStudent);

export default router;