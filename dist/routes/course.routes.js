"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = require("../controllers/course.controller");
const router = (0, express_1.Router)();
router.get('/', course_controller_1.fetchAllCourses);
router.get('/:id', course_controller_1.fetchCourseById);
router.post('/', course_controller_1.addCourse);
router.put('/:id', course_controller_1.modifyCourse);
router.delete('/:id', course_controller_1.removeCourse);
exports.default = router;
