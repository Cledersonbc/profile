import { Controller } from "./index";
import { Project } from "../models/index";
import { ProjectView } from "../views/index";

export class ProjectController implements Controller<Project> {
    add(project: Project): void {
        const projectView = new ProjectView("#projects-list");
        projectView.updateList(project);
    }

    addAll(projects: Project[]): void {
        for (let project of projects) {
            this.add(project);
        }
    }
}