"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getCourseById = exports.getAllCourses = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Fetch all courses
const getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.course.findMany({ include: { students: { include: { student: true } } } });
});
exports.getAllCourses = getAllCourses;
// Fetch a course by ID
const getCourseById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.course.findUnique({
        where: { id },
        include: { students: { include: { student: true } } },
    });
});
exports.getCourseById = getCourseById;
// Create a new course
const createCourse = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.course.create({ data });
});
exports.createCourse = createCourse;
// Update a course
const updateCourse = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.course.update({ where: { id }, data });
});
exports.updateCourse = updateCourse;
// Delete a course
const deleteCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.course.delete({ where: { id } });
});
exports.deleteCourse = deleteCourse;
