System.register("ts/controllers/Controller", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/models/Course", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/models/Project", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/models/Achievement", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/models/Education", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/models/index", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/views/View", [], function (exports_7, context_7) {
    "use strict";
    var View;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector) {
                    this._element = $(selector);
                }
                updateList(model) {
                    let template = this.template(model);
                    this._element.html(template + this._element.html());
                }
            };
            exports_7("View", View);
        }
    };
});
System.register("ts/views/CourseView", ["ts/views/View"], function (exports_8, context_8) {
    "use strict";
    var View_1, CourseView;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            CourseView = class CourseView extends View_1.View {
                template(course) {
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
            };
            exports_8("CourseView", CourseView);
        }
    };
});
System.register("ts/views/ProjectView", ["ts/views/index"], function (exports_9, context_9) {
    "use strict";
    var index_1, ProjectView;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            ProjectView = class ProjectView extends index_1.View {
                template(project) {
                    return `
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col m2 s12 center">
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
            };
            exports_9("ProjectView", ProjectView);
        }
    };
});
System.register("ts/views/AchievementView", ["ts/views/index"], function (exports_10, context_10) {
    "use strict";
    var index_2, AchievementView;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            AchievementView = class AchievementView extends index_2.View {
                template(achievement) {
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
            };
            exports_10("AchievementView", AchievementView);
        }
    };
});
System.register("ts/views/EducationView", ["ts/views/index"], function (exports_11, context_11) {
    "use strict";
    var index_3, EducationView;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            EducationView = class EducationView extends index_3.View {
                template(education) {
                    return `
        <div class="col s12 m12">
            <div class="card">
                <div class="card-content">
                    <div class="row">
                        <div class="col m2 s12 center">
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
            };
            exports_11("EducationView", EducationView);
        }
    };
});
System.register("ts/views/index", ["ts/views/View", "ts/views/CourseView", "ts/views/ProjectView", "ts/views/AchievementView", "ts/views/EducationView"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_12(exports);
    }
    return {
        setters: [
            function (View_2_1) {
                exportStar_1(View_2_1);
            },
            function (CourseView_1_1) {
                exportStar_1(CourseView_1_1);
            },
            function (ProjectView_1_1) {
                exportStar_1(ProjectView_1_1);
            },
            function (AchievementView_1_1) {
                exportStar_1(AchievementView_1_1);
            },
            function (EducationView_1_1) {
                exportStar_1(EducationView_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/controllers/CourseController", ["ts/views/index"], function (exports_13, context_13) {
    "use strict";
    var index_4, CourseController;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            CourseController = class CourseController {
                add(course) {
                    const view = new index_4.CourseView("#courses-list");
                    view.updateList(course);
                }
                addAll(courses) {
                    for (let course of courses) {
                        this.add(course);
                    }
                }
            };
            exports_13("CourseController", CourseController);
        }
    };
});
System.register("ts/controllers/ProjectController", ["ts/views/index"], function (exports_14, context_14) {
    "use strict";
    var index_5, ProjectController;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            ProjectController = class ProjectController {
                add(project) {
                    const view = new index_5.ProjectView("#projects-list");
                    view.updateList(project);
                }
                addAll(projects) {
                    for (let project of projects) {
                        this.add(project);
                    }
                }
            };
            exports_14("ProjectController", ProjectController);
        }
    };
});
System.register("ts/controllers/AchievementController", ["ts/views/index"], function (exports_15, context_15) {
    "use strict";
    var index_6, AchievementController;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (index_6_1) {
                index_6 = index_6_1;
            }
        ],
        execute: function () {
            AchievementController = class AchievementController {
                add(achievement) {
                    const view = new index_6.AchievementView('#achievements-list');
                    view.updateList(achievement);
                }
                addAll(achievements) {
                    for (let achievement of achievements) {
                        this.add(achievement);
                    }
                }
            };
            exports_15("AchievementController", AchievementController);
        }
    };
});
System.register("ts/controllers/EducationController", ["ts/views/index"], function (exports_16, context_16) {
    "use strict";
    var index_7, EducationController;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (index_7_1) {
                index_7 = index_7_1;
            }
        ],
        execute: function () {
            EducationController = class EducationController {
                add(education) {
                    const view = new index_7.EducationView("#educations-list");
                    view.updateList(education);
                }
                addAll(educations) {
                    for (let education of educations) {
                        this.add(education);
                    }
                }
            };
            exports_16("EducationController", EducationController);
        }
    };
});
System.register("ts/controllers/index", ["ts/controllers/CourseController", "ts/controllers/ProjectController", "ts/controllers/AchievementController", "ts/controllers/EducationController"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_17(exports);
    }
    return {
        setters: [
            function (CourseController_1_1) {
                exportStar_2(CourseController_1_1);
            },
            function (ProjectController_1_1) {
                exportStar_2(ProjectController_1_1);
            },
            function (AchievementController_1_1) {
                exportStar_2(AchievementController_1_1);
            },
            function (EducationController_1_1) {
                exportStar_2(EducationController_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/data/Data", [], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/data/CourseData", [], function (exports_19, context_19) {
    "use strict";
    var CourseData;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
            CourseData = class CourseData {
                get() {
                    const rootPrefix = '/profile/';
                    return [
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 1: primeiros passos',
                            place: 'Alura',
                            originalTitle: 'Java parte 1: primeiros passos',
                            duration: '16/04/2019 - 20/04/2019 (20h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'HTTP: entendendo a Web por baixo dos panos',
                            place: 'Alura',
                            originalTitle: 'HTTP: entendendo a Web por baixo dos panos',
                            duration: '17/04/2019 - 23/04/2019 (14h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 2: introdução à orientação a objetos',
                            place: 'Alura',
                            originalTitle: 'Java parte 2: introdução à orientação a objetos',
                            duration: '19/04/2019 - 25/04/2019 (8h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 3: entendendo herança e interface',
                            place: 'Alura',
                            originalTitle: 'Java: entendendo herança e interface',
                            duration: '22/04/2019 - 11/05/2019 (16h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 4: entendendo as exceções',
                            place: 'Alura',
                            originalTitle: 'Java: entendendo as exceções',
                            duration: '22/04/2019 - 17/05/2019 (12h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 5: pacotes e java.lang',
                            place: 'Alura',
                            originalTitle: 'Java parte 5: pacotes e java.lang',
                            duration: '17/05/2019 - 17/05/2019 (12h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 6: conhecendo o java.util',
                            place: 'Alura',
                            originalTitle: 'Java parte 6: conhecendo o java.util',
                            duration: '17/05/2019 - 19/05/2019 (12h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java parte 7: trabalhando com java.io',
                            place: 'Alura',
                            originalTitle: 'Java parte 7: trabalhando com java.io',
                            duration: '19/05/2019 - 20/05/2019 (12h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java: dominando as Collections',
                            place: 'Alura',
                            originalTitle: 'Java: dominando as Collections',
                            duration: '20/05/2019 - 22/05/2019 (20h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Maven: build do zero a web',
                            place: 'Alura',
                            originalTitle: 'Maven: build do zero a web',
                            duration: '22/05/2019 - 26/05/2019 (6h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Spring MVC I: criando aplicações web',
                            place: 'Alura',
                            originalTitle: 'Spring MVC I: criando aplicações web',
                            duration: '28/05/2019 - 12/06/2019 (20h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Java e JPA: persista seus objetos com JPA2 e Hibernate',
                            place: 'Alura',
                            originalTitle: 'Java e JPA: persista seus objetos com JPA2 e Hibernate',
                            duration: '06/06/2019 - 08/06/2019 (17h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Introdução ao MySQL: manipule dados com MySQL',
                            place: 'Alura',
                            originalTitle: 'Introdução ao MySQL: manipule dados com MySQL',
                            duration: '14/06/2019 - 15/06/2019 (12h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'Consultas no SQL: avançando no SQL com MySQL',
                            place: 'Alura',
                            originalTitle: 'Consultas no SQL: avançando no SQL com MySQL',
                            duration: '15/06/2019 - 22/06/2019 (14h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'TypeScript parte 1: evoluindo seu JavaScript',
                            place: 'Alura',
                            originalTitle: 'TypeScript parte 1: evoluindo seu JavaScript',
                            duration: '03/07/2019 - 05/07/2019 (8h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/alura.png`,
                            name: 'TypeScript parte 2: mais técnicas e boas práticas',
                            place: 'Alura',
                            originalTitle: 'TypeScript parte 2: mais técnicas e boas práticas',
                            duration: '05/07/2019 - 10/07/2019 (10h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'REST API with Java: Java APIs with JSON, Maven, & Spring',
                            place: 'Accenture',
                            originalTitle: 'REST API with Java: Java APIs with JSON, Maven, & Spring',
                            duration: '24/07/2019 (0,9h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Big Data Architecture Fundamentals: Part 1',
                            place: 'Accenture',
                            originalTitle: 'Big Data Architecture Fundamentals: Part 1',
                            duration: '31/07/2019 (1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Big Data Architecture Fundamentals: Part 2',
                            place: 'Accenture',
                            originalTitle: 'Big Data Architecture Fundamentals: Part 2',
                            duration: '05/08/2019 (1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Scalable Data Architectures: Introduction',
                            place: 'Accenture',
                            originalTitle: 'Scalable Data Architectures: Introduction',
                            duration: '16/08/2019 (0,9h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Agile Software Development - Scrum',
                            place: 'Accenture',
                            originalTitle: 'Agile Software Development - Scrum',
                            duration: '30/08/2019 (1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Git Smart Git Safe Git Secure',
                            place: 'Accenture',
                            originalTitle: 'Git Smart Git Safe Git Secure',
                            duration: '01/09/2019 (0,5h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Administrator Security Essentials',
                            place: 'Accenture',
                            originalTitle: 'Administrator Security Essentials',
                            duration: '01/09/2019 (0,5h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Docker Introduction',
                            place: 'Accenture',
                            originalTitle: 'Docker Introduction',
                            duration: '16/09/2019 (1,1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Introduction to Apache Spark',
                            place: 'Accenture',
                            originalTitle: 'Introduction to Apache Spark',
                            duration: '16/09/2019 (1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Cloud Application Security',
                            place: 'Accenture',
                            originalTitle: 'Cloud Application Security',
                            duration: '19/09/2019 (2h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Accessing Data with Spark: An Introduction to Spark',
                            place: 'Accenture',
                            originalTitle: 'Accessing Data with Spark: An Introduction to Spark',
                            duration: '23/09/2019 (1,1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Design Thinking Online (DTO)',
                            place: 'Accenture',
                            originalTitle: 'Design Thinking Online (DTO)',
                            duration: '24/09/2019 (1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'AWA 101 - Fundamentals of Application Security',
                            place: 'Accenture',
                            originalTitle: 'AWA 101 - Fundamentals of Application Security',
                            duration: '05/10/2019 (expira em 05/10/2022)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Apache Kafka',
                            place: 'Accenture',
                            originalTitle: 'Apache Kafka',
                            duration: '13/10/2019 (2h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Accessing Data with Spark: Data Analysis using Spark SQL',
                            place: 'Accenture',
                            originalTitle: 'Accessing Data with Spark: Data Analysis using Spark SQL',
                            duration: '13/10/2019 (0,9h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Create Spark Streaming Applications',
                            place: 'Accenture',
                            originalTitle: 'Create Spark Streaming Applications',
                            duration: '13/10/2019 (1,3h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Apache Spark SQL',
                            place: 'Accenture',
                            originalTitle: 'Apache Spark SQL',
                            duration: '20/10/2019 (1,2h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/udemy.png`,
                            name: 'Introduction to TypeScript',
                            place: 'Udemy',
                            originalTitle: 'Introduction to TypeScript',
                            duration: '20/10/2019 (1,1h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Using Docker: Dockerizing Applications',
                            place: 'Accenture',
                            originalTitle: 'Using Docker: Dockerizing Applications',
                            duration: '02/11/2019 (2h)'
                        },
                        {
                            logo: `${rootPrefix}img/courses/accenture.jpg`,
                            name: 'Privacy by Design',
                            place: 'Accenture',
                            originalTitle: 'Privacy by Design',
                            duration: '17/11/2019 (0,5h)'
                        }
                    ];
                }
            };
            exports_19("CourseData", CourseData);
        }
    };
});
System.register("ts/data/ProjectData", [], function (exports_20, context_20) {
    "use strict";
    var ProjectData;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [],
        execute: function () {
            ProjectData = class ProjectData {
                get() {
                    const rootPrefix = '/profile/';
                    return [
                        {
                            logo: `${rootPrefix}img/projects/brain.svg`,
                            name: 'Av-ned-herrmann',
                            url: 'https://github.com/Cledersonbc/av-ned-herrmann',
                            description: '<p>Aplicação desenvolvida em Java com Swing para análise comportamental baseada nos estudos de Ned Herrmann.</p><p>Começou como um trabalho na faculdade para a disciplina de Programação Orientada a Objetos, mas achei interessante publicá-lo no Github e também criar uma versão web para o teste. O teste indica o seu tipo de perfil comportamental com base nas suas respostas. <a href="https://github.com/Cledersonbc/av-ned-herrmann" target="_blank">[Ler mais]</a></p>'
                        },
                        {
                            logo: `${rootPrefix}img/projects/crawler.svg`,
                            name: 'Feedscrapy',
                            url: 'https://github.com/Cledersonbc/feedscrapy',
                            description: '<p>Web Crawler, desenvolvido em Python, que sonda por assuntos específicos em sites, portais de notícias e então envia-os para o e-mail da pessoa.</p><p>Criei esse bot durante a <a href="https://pt.wikipedia.org/wiki/Greve_dos_caminhoneiros_no_Brasil_em_2018" target="_blank">greve dos caminhoneiros no Brasil</a>. Como dependia (e ainda dependo) do transporte público para ir ao trabalho, precisava a todo momento estar atento às notícias que chegavam sobre a greve. Então o construí e o deixei rodando em um mini-computador Raspberry para alimentar meu e-mail. <a href="https://github.com/Cledersonbc/feedscrapy" target="_blank">[Ler mais]</a></p>'
                        },
                        {
                            logo: `${rootPrefix}img/projects/pendrive.svg`,
                            name: 'Restaura-pendrive',
                            url: 'https://github.com/Cledersonbc/restaura-pendrive',
                            description: '<p>Ferramenta desenvolvida em Java para restaurar arquivos de pendrive ocultados por vírus.</p><p>Comecei a trabalhar nessa ferramenta ainda na faculdade, por conta dos computadores em lojas de impressão e xérox que eram infestados por vírus. Mais tarde, essa ferramenta ajudou não só a mim como também outros alunos que passavam pelo mesmo. <a href="https://github.com/Cledersonbc/restaura-pendrive" target="_blank">[Ler mais]</a></p>'
                        },
                        {
                            logo: `${rootPrefix}img/projects/autociencia.png`,
                            name: 'Autociência',
                            url: 'https://autociencia.blogspot.com/',
                            description: '<p>Blog para divulgação de ciência e tecnologia, com ênfase na ciência da computação e engenharia de software.</p><p>É um projeto que criei com um amigo do ensino técnico e o mantemos até o momento. <a href="https://autociencia.blogspot.com/" target="_blank">[Ler mais]</a></p>'
                        },
                        {
                            logo: `${rootPrefix}img/projects/tic-tac-toe.svg`,
                            name: 'Tic-tac-toe-minimax',
                            url: 'https://github.com/Cledersonbc/tic-tac-toe-minimax',
                            description: '<p>Implementação em Python do algoritmo Minimax para criar uma inteligência artificial para o jogo da velha.</p><p>É o meu projeto mais popular no Github, além de também ser bem difundido por estudantes de IA em vários países. <a href="https://github.com/Cledersonbc/tic-tac-toe-minimax" target="_blank">[Ler mais]</a></p>'
                        }
                    ];
                }
            };
            exports_20("ProjectData", ProjectData);
        }
    };
});
System.register("ts/data/AchievementData", [], function (exports_21, context_21) {
    "use strict";
    var AchievementData;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [],
        execute: function () {
            AchievementData = class AchievementData {
                get() {
                    return [
                        {
                            title: 'Representante de sala',
                            description: '<p>Em 2013 e em 2014 fui <b>representante de sala</b> no ensino técnico. Também fui representante de sala na metade do curso na faculdade (2016-2017) e vice-representante na outra metade (2017-2018).</p>'
                        },
                        {
                            title: 'Palestrante na faculdade',
                            description: '<p>Em 2017, na Semana Nacional de Ciência e Tecnologia (SNCT), fui <b>palestrante</b> na <b>Fatec-ZL</b> sobre <b>Escritos digitais e cibercultura – uma leitura das narrativas literária fílmica: Fahrenheit 451</b>. Também palestrei um pouco sobre distopia da ficção científica, citando obras reconhecidas do gênero.</p>'
                        },
                        {
                            title: 'Monitor voluntário na faculdade',
                            description: '<p>Em 2017, durante dois semestres desse mesmo ano, fui <b>monitor de cálculo</b> na <b>Fatec-ZL</b>. Ensinei e tirei dúvidas de alunos sobre funções, taxa de variação média, limites, derivadas e integrais.</p>'
                        },
                        {
                            title: 'Participante do IX Simpósio de Geriatria e Gerontologia',
                            description: '<p>Em novembro de 2017, fui <b>participante convidado</b> do <b>IX Simpósio de Geriatria e Gerontologia</b> apresentando <b>inovações tecnológicas de baixo custo (uso de Raspberry + RFID + Arduíno)</b> para a área da saúde.</p>'
                        },
                        {
                            title: '1º Artigo publicado',
                            description: '<p>Em 05 de dezembro de 2018 publiquei meu primeiro artigo acadêmico, intitulado "<b>Vigilantismo e Sociedade: controle e poder na era da internet</b>", na <b>EnGeTec</b>.</p>'
                        },
                        {
                            title: '1ª Apresentação sobre Inteligência Artificial na Pós-graduação',
                            description: '<p>Em novembro de 2019 apresentei meu primeiro trabalho sobre <b>Inteligência Artificial</b> — na <b>Unidade de Pós-graduação, Extensão e Pesquisa do Centro Paula Souza</b> — para a disciplina de Sistemas de Informação e Tecnologias sob a perspectiva ética e filosófica. Também discuti os (possíveis) impactos social e mercadológico no contexto da América do Sul.</p>'
                        }
                    ];
                }
            };
            exports_21("AchievementData", AchievementData);
        }
    };
});
System.register("ts/data/EducationData", [], function (exports_22, context_22) {
    "use strict";
    var EducationData;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [],
        execute: function () {
            EducationData = class EducationData {
                get() {
                    const rootPrefix = '/profile/';
                    return [
                        {
                            logo: `${rootPrefix}img/education/drummond.png`,
                            title: 'Ensino profissionalizante: Técnico em Programação de Jogos Digitais',
                            course: 'Programação de Jogos Digitais',
                            school: 'Carlos Drummond de Andrade',
                            duration: '2013-2014'
                        },
                        {
                            logo: `${rootPrefix}img/education/fatec.png`,
                            title: 'Graduação: Tecnólogo em Análise e Desenvolvimento de Sistemas',
                            course: 'Análise e Desenvolvimento de Sistemas',
                            school: 'Faculdade de Tecnologia do Estado de São Paulo (FATEC)',
                            duration: '2016-2018'
                        },
                        {
                            logo: `${rootPrefix}img/education/cps.png`,
                            title: 'Pós-graduação: MBA em Tecnologia em Inovação',
                            course: 'Tecnologia e Inovação',
                            school: 'Unidade de Pós-Graduação, Extensão e Pesquisa do Centro Paula Souza',
                            duration: '2019-2021'
                        }
                    ];
                }
            };
            exports_22("EducationData", EducationData);
        }
    };
});
System.register("ts/data/index", ["ts/data/CourseData", "ts/data/ProjectData", "ts/data/AchievementData", "ts/data/EducationData"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_23(exports);
    }
    return {
        setters: [
            function (CourseData_1_1) {
                exportStar_3(CourseData_1_1);
            },
            function (ProjectData_1_1) {
                exportStar_3(ProjectData_1_1);
            },
            function (AchievementData_1_1) {
                exportStar_3(AchievementData_1_1);
            },
            function (EducationData_1_1) {
                exportStar_3(EducationData_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/app", ["ts/controllers/index", "ts/data/index"], function (exports_24, context_24) {
    "use strict";
    var index_8, index_9, App;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (index_8_1) {
                index_8 = index_8_1;
            },
            function (index_9_1) {
                index_9 = index_9_1;
            }
        ],
        execute: function () {
            App = class App {
                start() {
                    this.showWarningMessage();
                    this.stickyMenu();
                    this.loadProjects();
                    this.loadEducations();
                    this.loadCourses();
                    this.loadAchievements();
                }
                loadProjects() {
                    let projectData = new index_9.ProjectData();
                    let controller = new index_8.ProjectController();
                    controller.addAll(projectData.get());
                }
                loadEducations() {
                    let educationData = new index_9.EducationData();
                    let controller = new index_8.EducationController();
                    controller.addAll(educationData.get());
                }
                loadCourses() {
                    let courseData = new index_9.CourseData();
                    let controller = new index_8.CourseController();
                    controller.addAll(courseData.get());
                }
                loadAchievements() {
                    let achievementData = new index_9.AchievementData();
                    let controller = new index_8.AchievementController();
                    controller.addAll(achievementData.get());
                }
                showWarningMessage() {
                    console.warn("Author: Clederson Cruz\n" +
                        "Date: 2019-10-07\n" +
                        "Note: You are free to copy and use this web page but be careful: you are not able to use or reuse my personal data. Follow your common sense and create your own web personal page too!");
                }
                stickyMenu() {
                    window.onscroll = function () {
                        let header = document.querySelector("#profile-nav-menu");
                        let sticky = header.offsetTop;
                        if (window.pageYOffset > sticky) {
                            header.classList.add("sticky");
                        }
                        else {
                            header.classList.remove("sticky");
                        }
                    };
                }
            };
            exports_24("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map