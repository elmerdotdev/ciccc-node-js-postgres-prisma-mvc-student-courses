import { PrismaClient, Student } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all students
export const getAllStudents = async (): Promise<Student[]> => {
  return await prisma.student.findMany({ include: { courses: { include: { course: true } } } });
};

// Fetch a student by ID
export const getStudentById = async (id: number): Promise<Student | null> => {
  return await prisma.student.findUnique({
    where: { id },
    include: { courses: { include: { course: true } } },
  });
};

// Create a new student
export const createStudent = async (data: Omit<Student, 'id'>): Promise<Student> => {
  return await prisma.student.create({ data });
};

// Update a student
export const updateStudent = async (
  id: number,
  data: Partial<Omit<Student, 'id'>>
): Promise<Student> => {
  return await prisma.student.update({ where: { id }, data });
};

// Delete a student
export const deleteStudent = async (id: number): Promise<Student> => {
  return await prisma.student.delete({ where: { id } });
};