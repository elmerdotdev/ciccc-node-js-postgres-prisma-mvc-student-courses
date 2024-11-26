import { Request, Response } from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../models/student.model';

// Fetch all students
export const fetchAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// Fetch a student by ID
export const fetchStudentById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const student = await getStudentById(id);
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};

// Create a new student
export const addStudent = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, age } = req.body;
    const newStudent = await createStudent({ firstname, lastname, age });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
};

// Update a student
export const modifyStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { firstname, lastname, age } = req.body;
    const updatedStudent = await updateStudent(id, { firstname, lastname, age });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// Delete a student
export const removeStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedStudent = await deleteStudent(id);
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};