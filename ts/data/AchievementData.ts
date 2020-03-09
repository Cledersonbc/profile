import { Data } from "./index";
import { Achievement } from "../models/index";

export class AchievementData implements Data<Achievement> {

    get(): Achievement[] {
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
                description: '<p>Em 05 de dezembro de 2018 publiquei meu primeiro artigo acadêmico, intitulado "<b>Vigilantismo e Sociedade: controle e poder na era da internet</b>" nos Anais do 1º Encontro de Gestão e Tecnologia (EnGeTec). <a href="http://fateczl.edu.br/engetec/ANAIS%20DO%201%C2%BA%20ENGETEC%20-%202018.pdf" target="_blank">Disponível aqui</a>, pág. 428.</p>'
            },
            {
                title: '1ª Apresentação sobre Inteligência Artificial na Pós-graduação',
                description: '<p>Em novembro de 2019 apresentei meu primeiro trabalho sobre <b>Inteligência Artificial</b> — na <b>Unidade de Pós-graduação, Extensão e Pesquisa do Centro Paula Souza</b> — para a disciplina de Sistemas de Informação e Tecnologias sob a perspectiva ética e filosófica. Também discuti os (possíveis) impactos social e mercadológico no contexto da América do Sul.</p>'
            }
        ];
    }

}