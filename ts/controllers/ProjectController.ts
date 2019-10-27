import { Controller } from './index';
import { Project } from '../models/index';
import { ProjectView } from '../views/index';

export class ProjectController implements Controller<Project> {
    add(project: Project): void {
        const view = new ProjectView("#projects-list");
        view.updateList(project);
    }

    addAll(projects: Project[]): void {
        for (let project of projects) {
            this.add(project);
        }
    }
}