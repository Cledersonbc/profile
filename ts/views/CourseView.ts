import { Course } from '../models/index';
import { View } from './View';

export class CourseView extends View<Course> {

    template(course: Course): string {
        return `
            <div class="col s12 m12">
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="col m2 s12 center">
                                <img src="${course.logo}">
                            </div>
                            <div class="col m10 s12">
                                <span class="card-title">
                                    ${course.name}
                                </span>
                                <p><b>Local</b>: ${course.place}</p>
                                <p><b>Título</b>: ${course.originalTitle}</p>
                                <p><b>Data/Duração</b>: ${course.duration}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}