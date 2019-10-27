import { Course } from "../models/index";
import { CourseView } from "../views/index";

export class CourseController {
    
    addCourse(course: Course): void {
        const courseView = new CourseView("#courses-list");
        courseView.updateList(course);
    }

    addCourses(courses: Course[]): void {
        for (let course of courses) {
            this.addCourse(course);
        }
    }
}