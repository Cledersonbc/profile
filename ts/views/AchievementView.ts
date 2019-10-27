import { View } from "./index";
import { Achievement } from "../models/index";

export class AchievementView extends View<Achievement> {

    template(achievement: Achievement): string {
        return `
            <div class="row">
                <div class="col s12 m12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">${achievement.title}</span>
                            ${achievement.description}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}