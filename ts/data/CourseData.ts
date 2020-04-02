import { Course } from "../models/index";
import { Data } from "./index";

export class CourseData implements Data<Course> {

    get(): Course[] {
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
            },
            {
                logo: `${rootPrefix}img/courses/scylla-university.png`,
                name: 'Scylla Essentials – Overview of Scylla and NoSQL Basics',
                place: 'Scylla University',
                originalTitle: 'Scylla Essentials – Overview of Scylla and NoSQL Basics',
                duration: '21/11/2019 - 22/11/2019'
            },
            {
                logo: `${rootPrefix}img/courses/accenture.jpg`,
                name: 'AWA 102 - Secure Software Concepts',
                place: 'Accenture',
                originalTitle: 'AWA 102 - Secure Software Concepts',
                duration: '20/02/2020 (expira em 20/02/2023)'
            },
            {
                logo: `${rootPrefix}img/courses/udemy.png`,
                name: 'Desenvolvimento Seguro de Software',
                place: 'Udemy',
                originalTitle: 'Desenvolvimento Seguro de Software',
                duration: '01/03/2020 - 06/03/2020'
            },
            {
                logo: `${rootPrefix}img/courses/cps.png`,
                name: 'Gestão do Tempo',
                place: 'Centro Paula Souza',
                originalTitle: 'Gestão do Tempo',
                duration: '24/03/2020 - 25/03/2020 (6h)'
            },
            {
                logo: `${rootPrefix}img/courses/pluralsight.png`,
                name: 'Automated Web Testing with Selenium and WebDriver using Java',
                place: 'Pluralsight',
                originalTitle: 'Automated Web Testing with Selenium and WebDriver using Java',
                duration: '27/03/2020 - 28/03/2020 (3,2h)'
            },
            {
                logo: `${rootPrefix}img/courses/pluralsight.png`,
                name: 'Automated Tests in Java with Fluent Interface using WebDriver Selenium',
                place: 'Pluralsight',
                originalTitle: 'Automated Tests in Java with Fluent Interface using WebDriver Selenium',
                duration: '31/03/2020 (1,6h)'
            }
        ];
    }

}