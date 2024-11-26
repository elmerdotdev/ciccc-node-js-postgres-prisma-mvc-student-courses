import express from 'express';
import studentRoutes from './routes/student.routes';
import courseRoutes from './routes/course.routes';
import studentCoursesRoutes from './routes/student_courses.routes';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/student-courses', studentCoursesRoutes);

const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});