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
exports.removeStudent = exports.modifyStudent = exports.addStudent = exports.fetchStudentById = exports.fetchAllStudents = void 0;
const student_model_1 = require("../models/student.model");
// Fetch all students
const fetchAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, student_model_1.getAllStudents)();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});
exports.fetchAllStudents = fetchAllStudents;
// Fetch a student by ID
const fetchStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const student = yield (0, student_model_1.getStudentById)(id);
        if (!student) {
            res.status(404).json({ error: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch student' });
    }
});
exports.fetchStudentById = fetchStudentById;
// Create a new student
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, age } = req.body;
        const newStudent = yield (0, student_model_1.createStudent)({ firstname, lastname, age });
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create student' });
    }
});
exports.addStudent = addStudent;
// Update a student
const modifyStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const { firstname, lastname, age } = req.body;
        const updatedStudent = yield (0, student_model_1.updateStudent)(id, { firstname, lastname, age });
        res.status(200).json(updatedStudent);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update student' });
    }
});
exports.modifyStudent = modifyStudent;
// Delete a student
const removeStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const deletedStudent = yield (0, student_model_1.deleteStudent)(id);
        res.status(200).json(deletedStudent);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete student' });
    }
});
exports.removeStudent = removeStudent;
