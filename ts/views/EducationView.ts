import { View } from './index';
import { Education } from '../models/index';

export class EducationView extends View<Education> {

    template(education: Education): string {
        return `
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col m2 s12 center logo-container">
                            <img src="${education.logo}">
                        </div>
                        <div class="col m10 s12">
                                <span class="card-title">
                                    ${education.title}
                                </span>
                                <p><b>Curso</b>: ${education.course}</p>
                                <p><b>Instituição</b>: ${education.school}</p>
                                <p><b>Duração</b>: ${education.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    
}