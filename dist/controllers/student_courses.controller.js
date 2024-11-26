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
exports.unenrollStudent = exports.enrollStudent = void 0;
const student_courses_model_1 = require("../models/student_courses.model");
// Enroll a student in a course
const enrollStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId, courseId } = req.body;
        const result = yield (0, student_courses_model_1.enrollStudentInCourse)(studentId, courseId);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to enroll student in course' });
    }
});
exports.enrollStudent = enrollStudent;
// Remove a student from a course
const unenrollStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId, courseId } = req.body;
        const result = yield (0, student_courses_model_1.removeStudentFromCourse)(studentId, courseId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to unenroll student from course' });
    }
});
exports.unenrollStudent = unenrollStudent;