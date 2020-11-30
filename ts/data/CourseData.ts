import { Course } from "../models/index";
import { Data } from "./index";

export class CourseData implements Data<Course> {

    get(): Course[] {
        return [
            {
                logo: './img/courses/cps.png',
                name: 'Certificado de apresentação no Encontro Tecnológico Fatec 2017 Fahreheit 451',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de apresentação no Encontro Tecnológico Fatec 2017 "Escritos digitais e cibercultura; uma leitura das narrativas literária filmica: Fahrenheit 451"',
                duration: '09/10/2017 (2h)',
                certificate: 'https://drive.google.com/file/d/1gpk0_OmGwsg4ZUgGYoqBgAibbkURJbSF/view?usp=sharing'
            },
            {
                logo: './img/courses/cps.png',
                name: 'Certificado de apresentação no Encontro Tecnológico Fatec 2017 Criptografia e Esteganografia',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de apresentação no Encontro Tecnológico Fatec 2017 "Grafias na web: criptografia e esteganografia"',
                duration: '09/10/2017 (6h)',
                certificate: 'https://drive.google.com/file/d/1KfHWnt2kittNLeialC9GgXbHW9ahWOQI/view?usp=sharing'
            },
            {
                logo: './img/courses/cps.png',
                name: 'Certificado de apresentação no Encontro Tecnológico Fatec 2017 Criptografia e Esteganografia',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de apresentação no Encontro Tecnológico Fatec 2017 "Grafias na web: criptografia e esteganografia"',
                duration: '10/10/2017 (4h)',
                certificate: 'https://drive.google.com/file/d/1MVCNmDAFeX9S-q8xGVME-LZ42I-ILqq6/view?usp=sharing'
            },
            {
                logo: './img/courses/cps.png',
                name: 'Certificado de palestrante sob o título "Papel do Aluno na Construção de Competências"',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de palestrante sob o título "Papel do Aluno na Construção de Competências"',
                duration: '24/03/2018',
                certificate: 'https://drive.google.com/file/d/1DAdaPD5Zk9mxod3FmaUbMpfapnk2gN9F/view?usp=sharing'
            },
            {
                logo: './img/courses/engetec.jpg',
                name: 'Certificado de Participação 1º EnGeTec',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de Participação 1º EnGeTec',
                duration: '04/12/2018 - 05/12/2018 (12h)',
                certificate: 'https://drive.google.com/file/d/1TUosg0vUCMUdMMCXvwmbLEVsa5h2IklT/view?usp=sharing'
            },
            {
                logo: './img/courses/engetec.jpg',
                name: 'Certificado de Publicação de Artigo 1º EnGeTec',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de Publicação de Artigo 1º EnGeTec: “Vigilantismo e Sociedade: controle e poder na era da internet”',
                duration: '04/12/2018 - 05/12/2018',
                certificate: 'https://drive.google.com/file/d/1FAWEIgaV_cu158JgHc99ZTaNbHMWHdrq/view?usp=sharing'
            },
            {
                logo: './img/courses/engetec.jpg',
                name: 'Certificado de Participação 1º EnGeTec Workshop Hackaton',
                place: 'Fatec Zona Leste',
                originalTitle: 'Certificado de Participação 1º EnGeTec Workshop Maratona de Programação e Hackatons',
                duration: '05/12/2018 (1h)',
                certificate: 'https://drive.google.com/file/d/1CJPWdDjhQjJu2FKNAxdkSe0bGFRiQoF8/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 1: primeiros passos',
                place: 'Alura',
                originalTitle: 'Java parte 1: primeiros passos',
                duration: '16/04/2019 - 20/04/2019 (20h)',
                certificate: 'https://drive.google.com/file/d/1-jFH3hr2tFRkBkfwQG5UU4-XGRopktbR/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'HTTP: entendendo a Web por baixo dos panos',
                place: 'Alura',
                originalTitle: 'HTTP: entendendo a Web por baixo dos panos',
                duration: '17/04/2019 - 23/04/2019 (14h)',
                certificate: 'https://drive.google.com/file/d/10sFMBGMNfsZUYXyS_-OdM7mNSzEicNWt/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 2: introdução à orientação a objetos',
                place: 'Alura',
                originalTitle: 'Java parte 2: introdução à orientação a objetos',
                duration: '19/04/2019 - 25/04/2019 (8h)',
                certificate: 'https://drive.google.com/file/d/127tGOHnpq-6cYQd18rJyFxfoMwq_QCIv/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 3: entendendo herança e interface',
                place: 'Alura',
                originalTitle: 'Java: entendendo herança e interface',
                duration: '22/04/2019 - 11/05/2019 (16h)',
                certificate: 'https://drive.google.com/file/d/1jdSXDEFzFWrEcaFzS8ZG2vGrvGXiTu2P/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 4: entendendo as exceções',
                place: 'Alura',
                originalTitle: 'Java: entendendo as exceções',
                duration: '22/04/2019 - 17/05/2019 (12h)',
                certificate: 'https://drive.google.com/file/d/1qStKjWae5t7kJSYCpBSezANnuVhA80Fp/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 5: pacotes e java.lang',
                place: 'Alura',
                originalTitle: 'Java parte 5: pacotes e java.lang',
                duration: '17/05/2019 - 17/05/2019 (12h)',
                certificate: 'https://drive.google.com/file/d/1Rag0zNN3_HU6_IzkI2-n2wiJZx4YSygE/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 6: conhecendo o java.util',
                place: 'Alura',
                originalTitle: 'Java parte 6: conhecendo o java.util',
                duration: '17/05/2019 - 19/05/2019 (12h)',
                certificate: 'https://drive.google.com/file/d/1MrEKLC9q5mXufs_sDM3GLgrUSrIeyBMB/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java parte 7: trabalhando com java.io',
                place: 'Alura',
                originalTitle: 'Java parte 7: trabalhando com java.io',
                duration: '19/05/2019 - 20/05/2019 (12h)',
                certificate: 'https://drive.google.com/file/d/1tbDhfRk1mJ8wCydjha-ypdfVuYKkvCxP/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java: dominando as Collections',
                place: 'Alura',
                originalTitle: 'Java: dominando as Collections',
                duration: '20/05/2019 - 22/05/2019 (20h)',
                certificate: 'https://drive.google.com/file/d/1KMjiCrbMl903MkrMOdtERc8Xb5CEzSrP/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Maven: build do zero a web',
                place: 'Alura',
                originalTitle: 'Maven: build do zero a web',
                duration: '22/05/2019 - 26/05/2019 (6h)',
                certificate: 'https://drive.google.com/file/d/1YlEe8U1NBkF1gIvi8HAIOr4QqWqikUTi/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Spring MVC I: criando aplicações web',
                place: 'Alura',
                originalTitle: 'Spring MVC I: criando aplicações web',
                duration: '28/05/2019 - 12/06/2019 (20h)',
                certificate: 'https://drive.google.com/file/d/1C8JjcrBF7MSARrhl4gsUCX5fQLAcd60L/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Java e JPA: persista seus objetos com JPA2 e Hibernate',
                place: 'Alura',
                originalTitle: 'Java e JPA: persista seus objetos com JPA2 e Hibernate',
                duration: '06/06/2019 - 08/06/2019 (17h)',
                certificate: 'https://drive.google.com/file/d/1SF4l0xrtdfB-7w0SR1l0WRAJO7pDLdPX/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Introdução ao MySQL: manipule dados com MySQL',
                place: 'Alura',
                originalTitle: 'Introdução ao MySQL: manipule dados com MySQL',
                duration: '14/06/2019 - 15/06/2019 (12h)',
                certificate: 'https://drive.google.com/file/d/1ejU2kaefVNPJkPWHTyRYaSt9SNFGaDTl/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Consultas no SQL: avançando no SQL com MySQL',
                place: 'Alura',
                originalTitle: 'Consultas no SQL: avançando no SQL com MySQL',
                duration: '15/06/2019 - 22/06/2019 (14h)',
                certificate: 'https://drive.google.com/file/d/1RL4miWfMl2jlk2gnQiWvwZtvVrbYbORd/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'TypeScript parte 1: evoluindo seu JavaScript',
                place: 'Alura',
                originalTitle: 'TypeScript parte 1: evoluindo seu JavaScript',
                duration: '03/07/2019 - 05/07/2019 (8h)',
                certificate: 'https://drive.google.com/file/d/1yXrMdS9tiedYPr34cXCa1gEYrWv211u5/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'TypeScript parte 2: mais técnicas e boas práticas',
                place: 'Alura',
                originalTitle: 'TypeScript parte 2: mais técnicas e boas práticas',
                duration: '05/07/2019 - 10/07/2019 (10h)',
                certificate: 'https://drive.google.com/file/d/1Wv2Y5hYUS56iz5PsZWSPL4smeLZ-FvDE/view?usp=sharing'
            },
            {
                logo: `./img/courses/alura.png`,
                name: 'Webpack: manipulando módulos na sua Webpack',
                place: 'Alura',
                originalTitle: 'Webpack: manipulando módulos na sua Webpack',
                duration: '10/07/2019 - 21/07/2019 (8h)',
                certificate: 'https://drive.google.com/file/d/1r0rjUuzCuobwI-EZy_fb_Kdy5uDuA-lA/view?usp=sharing'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'REST API with Java: Java APIs with JSON, Maven, & Spring',
                place: 'Accenture',
                originalTitle: 'REST API with Java: Java APIs with JSON, Maven, & Spring',
                duration: '24/07/2019 (0,9h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Big Data Architecture Fundamentals: Part 1',
                place: 'Accenture',
                originalTitle: 'Big Data Architecture Fundamentals: Part 1',
                duration: '31/07/2019 (1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Big Data Architecture Fundamentals: Part 2',
                place: 'Accenture',
                originalTitle: 'Big Data Architecture Fundamentals: Part 2',
                duration: '05/08/2019 (1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Scalable Data Architectures: Introduction',
                place: 'Accenture',
                originalTitle: 'Scalable Data Architectures: Introduction',
                duration: '16/08/2019 (0,9h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Agile Software Development - Scrum',
                place: 'Accenture',
                originalTitle: 'Agile Software Development - Scrum',
                duration: '30/08/2019 (1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Git Smart Git Safe Git Secure',
                place: 'Accenture',
                originalTitle: 'Git Smart Git Safe Git Secure',
                duration: '01/09/2019 (0,5h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Administrator Security Essentials',
                place: 'Accenture',
                originalTitle: 'Administrator Security Essentials',
                duration: '01/09/2019 (0,5h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Docker Introduction',
                place: 'Accenture',
                originalTitle: 'Docker Introduction',
                duration: '16/09/2019 (1,1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Introduction to Apache Spark',
                place: 'Accenture',
                originalTitle: 'Introduction to Apache Spark',
                duration: '16/09/2019 (1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Cloud Application Security',
                place: 'Accenture',
                originalTitle: 'Cloud Application Security',
                duration: '19/09/2019 (2h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Accessing Data with Spark: An Introduction to Spark',
                place: 'Accenture',
                originalTitle: 'Accessing Data with Spark: An Introduction to Spark',
                duration: '23/09/2019 (1,1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Design Thinking Online (DTO)',
                place: 'Accenture',
                originalTitle: 'Design Thinking Online (DTO)',
                duration: '24/09/2019 (1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'AWA 101 - Fundamentals of Application Security',
                place: 'Accenture',
                originalTitle: 'AWA 101 - Fundamentals of Application Security',
                duration: '05/10/2019 (expira em 05/10/2022)',
                certificate: 'https://drive.google.com/file/d/1QWz3NYBPyF95ozAfYcNz88WGkfMPv2Qs/view?usp=sharing'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Apache Kafka',
                place: 'Accenture',
                originalTitle: 'Apache Kafka',
                duration: '13/10/2019 (2h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Accessing Data with Spark: Data Analysis using Spark SQL',
                place: 'Accenture',
                originalTitle: 'Accessing Data with Spark: Data Analysis using Spark SQL',
                duration: '13/10/2019 (0,9h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Create Spark Streaming Applications',
                place: 'Accenture',
                originalTitle: 'Create Spark Streaming Applications',
                duration: '13/10/2019 (1,3h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Apache Spark SQL',
                place: 'Accenture',
                originalTitle: 'Apache Spark SQL',
                duration: '20/10/2019 (1,2h)'
            },
            {
                logo: `./img/courses/udemy.png`,
                name: 'Introduction to TypeScript',
                place: 'Udemy',
                originalTitle: 'Introduction to TypeScript',
                duration: '20/10/2019 (1,1h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Using Docker: Dockerizing Applications',
                place: 'Accenture',
                originalTitle: 'Using Docker: Dockerizing Applications',
                duration: '02/11/2019 (2h)'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Privacy by Design',
                place: 'Accenture',
                originalTitle: 'Privacy by Design',
                duration: '17/11/2019 (0,5h)'
            },
            {
                logo: `./img/courses/scylla-university.png`,
                name: 'Scylla Essentials – Overview of Scylla and NoSQL Basics',
                place: 'Scylla University',
                originalTitle: 'Scylla Essentials – Overview of Scylla and NoSQL Basics',
                duration: '21/11/2019 - 22/11/2019',
                certificate: 'https://drive.google.com/file/d/1WEVV500h1DF0ffIE_OHdbFMG1uiVSMm2/view?usp=sharing'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'AWA 102 - Secure Software Concepts',
                place: 'Accenture',
                originalTitle: 'AWA 102 - Secure Software Concepts',
                duration: '20/02/2020 (expira em 20/02/2023)'
            },
            {
                logo: `./img/courses/udemy.png`,
                name: 'Desenvolvimento Seguro de Software',
                place: 'Udemy',
                originalTitle: 'Desenvolvimento Seguro de Software',
                duration: '01/03/2020 - 06/03/2020'
            },
            {
                logo: `./img/courses/cps.png`,
                name: 'Gestão do Tempo',
                place: 'Centro Paula Souza',
                originalTitle: 'Gestão do Tempo',
                duration: '24/03/2020 - 25/03/2020 (6h)',
                certificate: 'https://drive.google.com/file/d/1BuqloEzla2KqGTgI9H7r6Vv_ZS6DxTqW/view?usp=sharing'
            },
            {
                logo: `./img/courses/pluralsight.png`,
                name: 'Automated Web Testing with Selenium and WebDriver using Java',
                place: 'Pluralsight',
                originalTitle: 'Automated Web Testing with Selenium and WebDriver using Java',
                duration: '27/03/2020 - 28/03/2020 (3,2h)',
                certificate: 'https://drive.google.com/file/d/1wKyH7efyzDQpSHzKhklvAW6e7DJraHpM/view?usp=sharing'
            },
            {
                logo: `./img/courses/pluralsight.png`,
                name: 'Automated Tests in Java with Fluent Interface using WebDriver Selenium',
                place: 'Pluralsight',
                originalTitle: 'Automated Tests in Java with Fluent Interface using WebDriver Selenium',
                duration: '31/03/2020 (1,6h)',
                certificate: 'https://drive.google.com/file/d/1HSqXtGCGa1r8pD6DsQQF25XkxQIVFWw6/view?usp=sharing'
            },
            {
                logo: `./img/courses/pluralsight.png`,
                name: 'JUnit 5 Fundamentals',
                place: 'Pluralsight',
                originalTitle: 'JUnit 5 Fundamentals',
                duration: '02/04/2020 - 07/04/2020 (3h)',
                certificate: 'https://drive.google.com/file/d/1XkalGf6kJF_UJWkOlq14k0y0Fr5s0pzc/view?usp=sharing'
            },
            {
                logo: `./img/courses/accenture.jpg`,
                name: 'Introduction to Quality Engineering',
                place: 'Accenture',
                originalTitle: 'Introduction to Quality Engineering',
                duration: '07/05/2020 (1h)'
            },
            {
                logo: `./img/courses/mackenzie.png`,
                name: 'Inteligência Artificial e Ferramentas Avançadas de Ciência de Dados',
                place: 'Universidade Presbiteriana Mackenzie',
                originalTitle: 'Inteligência Artificial e Ferramentas Avançadas de Ciência de Dados',
                duration: '04/08/2020 (4h)',
                certificate: 'https://drive.google.com/file/d/1TQIcCFSXeq6lzB1eumA-PKvAoKg7Cqyj/view?usp=sharing'
            },
            {
                logo: `./img/courses/skillsoft.jpg`,
                name: 'Certified Secure Software Lifecycle Professional (CSSLP) 2019: Core Concepts',
                place: 'Skillsoft',
                originalTitle: 'Certified Secure Software Lifecycle Professional (CSSLP) 2019: Core Concepts',
                duration: '25/08/2020',
                certificate: 'https://skillsoft.digitalbadges.skillsoft.com/f66aba20-37b8-4d76-b31b-83361e1f5d7e'
            },
            {
                logo: `./img/courses/skillsoft.jpg`,
                name: 'Certified Secure Software Lifecycle Professional (CSSLP) 2019: Privacy',
                place: 'Skillsoft',
                originalTitle: 'Certified Secure Software Lifecycle Professional (CSSLP) 2019: Privacy',
                duration: '26/08/2020',
                certificate: 'https://skillsoft.digitalbadges.skillsoft.com/adae96d7-d3ea-4578-a5a4-d0e784822108'
            },
            {
                logo: `./img/courses/skillsoft.jpg`,
                name: 'Software Security Best Practices',
                place: 'Skillsoft',
                originalTitle: 'Software Security Best Practices',
                duration: '26/08/2020',
                certificate: 'https://skillsoft.digitalbadges.skillsoft.com/24fe0d08-97f7-4319-a987-9b99e91ddd38'
            },
            {
                logo: `./img/courses/udemy.png`,
                name: 'Learn Apache Kafka for Beginners v2',
                place: 'Udemy',
                originalTitle: 'Learn Apache Kafka for Beginners v2',
                duration: '29/11/2020 (7,5h)',
                certificate: 'https://drive.google.com/file/d/1DpFEuOnkYehQvs6efPm5veKzqceoCxJG/view?usp=sharing'
            },
            {
                logo: `./img/courses/pluralsight.png`,
                name: 'Introduction to Testing in Java',
                place: 'Pluralsight',
                originalTitle: 'Introduction to Testing in Java',
                duration: '30/11/2020 (3,9h)',
                certificate: 'https://drive.google.com/file/d/192figGVp7-ID-rMLDVPOftms43w7kY9b/view?usp=sharing'
            },
        ];
    }

}
