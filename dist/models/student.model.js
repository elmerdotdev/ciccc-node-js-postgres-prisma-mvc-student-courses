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
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getAllStudents = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Fetch all students
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.findMany({ include: { courses: { include: { course: true } } } });
});
exports.getAllStudents = getAllStudents;
// Fetch a student by ID
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.findUnique({
        where: { id },
        include: { courses: { include: { course: true } } },
    });
});
exports.getStudentById = getStudentById;
// Create a new student
const createStudent = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.create({ data });
});
exports.createStudent = createStudent;
// Update a student
const updateStudent = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.update({ where: { id }, data });
});
exports.updateStudent = updateStudent;
// Delete a student
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.student.delete({ where: { id } });
});
exports.deleteStudent = deleteStudent;
