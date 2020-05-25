import { Education } from '../models/index';
import { Data } from './index';

export class EducationData implements Data<Education> {

    get(): Education[] {
        return [
            {
                logo: `../img/education/drummond.png`,
                title: 'Ensino profissionalizante: Técnico em Programação de Jogos Digitais',
                course: 'Programação de Jogos Digitais',
                school: 'Carlos Drummond de Andrade',
                duration: '2013-2014'
            },
            {
                logo: `../img/education/fatec.png`,
                title: 'Graduação: Tecnólogo em Análise e Desenvolvimento de Sistemas',
                course: 'Análise e Desenvolvimento de Sistemas',
                school: 'Faculdade de Tecnologia do Estado de São Paulo (FATEC)',
                duration: '2016-2018'
            },
            {
                logo: `../img/education/cps.png`,
                title: 'Pós-graduação: MBA em Tecnologia em Inovação',
                course: 'Tecnologia e Inovação',
                school: 'Unidade de Pós-Graduação, Extensão e Pesquisa do Centro Paula Souza',
                duration: '2019-2021'
            }
        ];
    }

}