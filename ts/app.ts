import { CourseController } from './controllers/index';
import { Course } from './models/index';
import { CourseData } from './data/index';

export class App {

    start(): void {
        this.showWarningMessage();
        this.loadCourses();
        this.stickyMenu();
        
    }

    private loadCourses(): void {
        let courseData = new CourseData();
        let controller = new CourseController();
        controller.addCourses(courseData.get());
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