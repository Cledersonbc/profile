import { CourseController, ProjectController, AchievementController, EducationController } from './controllers/index';
import { CourseData, ProjectData, AchievementData, EducationData } from './data/index';

export class App {

    start(): void {
        this.showWarningMessage();
        this.stickyMenu();
        this.loadProjects();
        this.loadEducations();
        this.loadCourses();
        this.loadAchievements();
    }

    private loadProjects(): void {
        let projectData = new ProjectData();
        let controller = new ProjectController();
        controller.addAll(projectData.get());
    }

    private loadEducations(): void {
        let educationData = new EducationData();
        let controller = new EducationController();
        controller.addAll(educationData.get());
    }

    private loadCourses(): void {
        let courseData = new CourseData();
        let controller = new CourseController();
        controller.addAll(courseData.get());
    }

    private loadAchievements(): void {
        let achievementData = new AchievementData();
        let controller = new AchievementController();
        controller.addAll(achievementData.get());
    }

    private showWarningMessage(): void {
        console.warn("Author: Clederson Cruz\n"+
            "Date: 2019-10-07\n"+
            "Note: You are free to copy and use this web page but be careful: you are not able to use or reuse my personal data. Follow your common sense and create your own web personal page too!"
        );
    }

    private stickyMenu(): void {
        window.onscroll = function() {
            let header = document.querySelector("#profile-nav-menu") as HTMLElement;
            let sticky = header.offsetTop;

            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };
    }
}