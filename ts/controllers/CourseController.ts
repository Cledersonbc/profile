import { Course } from '../models/index';
import { CourseView } from '../views/index';
import { Controller } from './index';

export class CourseController implements Controller<Course> {
    
    add(course: Course): void {
        const courseView = new CourseView("#courses-list");
        courseView.updateList(course);
    }

    addAll(courses: Course[]): void {
        for (let course of courses) {
            this.add(course);
        }
    }
}