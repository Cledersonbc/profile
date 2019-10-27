import { Controller } from './index';
import { Achievement } from '../models/index';
import { AchievementView } from '../views/index';

export class AchievementController implements Controller<Achievement> {

    add(achievement: Achievement): void {
        const achievementView = new AchievementView('#achievements-list');
        achievementView.updateList(achievement);
    }

    addAll(achievements: Achievement[]): void {
        for (let achievement of achievements) {
            this.add(achievement);
        }
    }

}