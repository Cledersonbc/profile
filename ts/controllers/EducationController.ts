import { Controller } from './index';
import { Education } from '../models/index';
import { EducationView } from '../views/index';

export class EducationController implements Controller<Education> {

    add(education: Education): void {
        const view = new EducationView("#educations-list");
        view.updateList(education);
    }

    addAll(educations: Education[]): void {
        for (let education of educations) {
            this.add(education);
        }
    }

}