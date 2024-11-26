import { PrismaClient, StudentCourses } from '@prisma/client';

const prisma = new PrismaClient();

// Enroll a student in a course
export const enrollStudentInCourse = async (
  studentId: number,
  courseId: number
): Promise<StudentCourses> => {
  return await prisma.studentCourses.create({
    data: { studentId, courseId },
  });
};

// Remove a student from a course
export const removeStudentFromCourse = async (
  studentId: number,
  courseId: number
): Promise<StudentCourses> => {
  return await prisma.studentCourses.delete({
    where: { studentId_courseId: { studentId, courseId } },
  });
};