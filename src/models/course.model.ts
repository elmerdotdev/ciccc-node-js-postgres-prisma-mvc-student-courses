import { PrismaClient, Course } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all courses
export const getAllCourses = async (): Promise<Course[]> => {
  return await prisma.course.findMany({ include: { students: { include: { student: true } } } });
};

// Fetch a course by ID
export const getCourseById = async (id: number): Promise<Course | null> => {
  return await prisma.course.findUnique({
    where: { id },
    include: { students: { include: { student: true } } },
  });
};

// Create a new course
export const createCourse = async (data: Omit<Course, 'id'>): Promise<Course> => {
  return await prisma.course.create({ data });
};

// Update a course
export const updateCourse = async (
  id: number,
  data: Partial<Omit<Course, 'id'>>
): Promise<Course> => {
  return await prisma.course.update({ where: { id }, data });
};

// Delete a course
export const deleteCourse = async (id: number): Promise<Course> => {
  return await prisma.course.delete({ where: { id } });
};