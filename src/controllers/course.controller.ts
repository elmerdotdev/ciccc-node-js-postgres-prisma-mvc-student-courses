import { Request, Response } from 'express';
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../models/course.model';

// Fetch all courses
export const fetchAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// Fetch a course by ID
export const fetchCourseById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const course = await getCourseById(id);
    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};

// Create a new course
export const addCourse = async (req: Request, res: Response) => {
  try {
    const { courseName } = req.body;
    const newCourse = await createCourse({ courseName });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

// Update a course
export const modifyCourse = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { courseName } = req.body;
    const updatedCourse = await updateCourse(id, { courseName });
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course' });
  }
};

// Delete a course
export const removeCourse = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedCourse = await deleteCourse(id);
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
};