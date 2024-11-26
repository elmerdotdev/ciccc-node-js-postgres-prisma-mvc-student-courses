"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_courses_controller_1 = require("../controllers/student_courses.controller");
const router = (0, express_1.Router)();
router.post('/enroll', student_courses_controller_1.enrollStudent);
router.delete('/unenroll', student_courses_controller_1.unenrollStudent);
exports.default = router;
