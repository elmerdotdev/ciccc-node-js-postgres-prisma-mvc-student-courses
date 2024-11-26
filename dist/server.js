"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const student_courses_routes_1 = __importDefault(require("./routes/student_courses.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/students', student_routes_1.default);
app.use('/api/courses', course_routes_1.default);
app.use('/api/student-courses', student_courses_routes_1.default);
const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
