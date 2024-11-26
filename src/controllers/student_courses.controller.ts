import { Request, Response } from 'express';
import { enrollStudentInCourse, removeStudentFromCourse } from '../models/student_courses.model';

// Enroll a student in a course
export const enrollStudent = async (req: Request, res: Response) => {
  try {
    const { studentId, courseId } = req.body;
    const result = await enrollStudentInCourse(studentId, courseId);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to enroll student in course' });
  }
};

// Remove a student from a course
export const unenrollStudent = async (req: Request, res: Response) => {
  try {
    const { studentId, courseId } = req.body;
    const result = await removeStudentFromCourse(studentId, courseId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to unenroll student from course' });
  }
};