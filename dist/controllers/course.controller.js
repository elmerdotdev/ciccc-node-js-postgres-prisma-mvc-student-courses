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
exports.removeCourse = exports.modifyCourse = exports.addCourse = exports.fetchCourseById = exports.fetchAllCourses = void 0;
const course_model_1 = require("../models/course.model");
// Fetch all courses
const fetchAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield (0, course_model_1.getAllCourses)();
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});
exports.fetchAllCourses = fetchAllCourses;
// Fetch a course by ID
const fetchCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const course = yield (0, course_model_1.getCourseById)(id);
        if (!course) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }
        res.status(200).json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch course' });
    }
});
exports.fetchCourseById = fetchCourseById;
// Create a new course
const addCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseName } = req.body;
        const newCourse = yield (0, course_model_1.createCourse)({ courseName });
        res.status(201).json(newCourse);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create course' });
    }
});
exports.addCourse = addCourse;
// Update a course
const modifyCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const { courseName } = req.body;
        const updatedCourse = yield (0, course_model_1.updateCourse)(id, { courseName });
        res.status(200).json(updatedCourse);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update course' });
    }
});
exports.modifyCourse = modifyCourse;
// Delete a course
const removeCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const deletedCourse = yield (0, course_model_1.deleteCourse)(id);
        res.status(200).json(deletedCourse);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete course' });
    }
});
exports.removeCourse = removeCourse;
