import { Project } from "../models/index";
import { View } from "./index";

export class ProjectView extends View<Project> {
    template(project: Project): string {
        return `
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col m2 s12 center logo-container">
                            <img src="${project.logo}">
                        </div>
                        <div class="col m10 s12">
                            <span class="card-title">
                                <a href="${project.url}" target="_blank">${project.name}</a>
                            </span>
                            ${project.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
