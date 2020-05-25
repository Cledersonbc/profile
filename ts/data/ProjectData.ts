import { Project } from "../models/index";
import { Data } from "./index";

export class ProjectData implements Data<Project> {

    get(): Project[] {
        return [
            {
                logo: `./img/projects/brain.svg`,
                name: 'Av-ned-herrmann',
                url: 'https://github.com/Cledersonbc/av-ned-herrmann',
                description: '<p>Aplicação desenvolvida em Java com Swing para análise comportamental baseada nos estudos de Ned Herrmann.</p><p>Começou como um trabalho na faculdade para a disciplina de Programação Orientada a Objetos, mas achei interessante publicá-lo no Github e também criar uma versão web para o teste. O teste indica o seu tipo de perfil comportamental com base nas suas respostas. <a href="https://github.com/Cledersonbc/av-ned-herrmann" target="_blank">[Ler mais]</a></p>'
            },
            {
                logo: `./img/projects/crawler.svg`,
                name: 'Feedscrapy',
                url: 'https://github.com/Cledersonbc/feedscrapy',
                description: '<p>Web Crawler, desenvolvido em Python, que sonda por assuntos específicos em sites, portais de notícias e então envia-os para o e-mail da pessoa.</p><p>Criei esse bot durante a <a href="https://pt.wikipedia.org/wiki/Greve_dos_caminhoneiros_no_Brasil_em_2018" target="_blank">greve dos caminhoneiros no Brasil</a>. Como dependia (e ainda dependo) do transporte público para ir ao trabalho, precisava a todo momento estar atento às notícias que chegavam sobre a greve. Então o construí e o deixei rodando em um mini-computador Raspberry para alimentar meu e-mail. <a href="https://github.com/Cledersonbc/feedscrapy" target="_blank">[Ler mais]</a></p>'
            },
            {
                logo: `./img/projects/pendrive.svg`,
                name: 'Restaura-pendrive',
                url: 'https://github.com/Cledersonbc/restaura-pendrive',
                description: '<p>Ferramenta desenvolvida em Java para restaurar arquivos de pendrive ocultados por vírus.</p><p>Comecei a trabalhar nessa ferramenta ainda na faculdade, por conta dos computadores em lojas de impressão e xérox que eram infestados por vírus. Mais tarde, essa ferramenta ajudou não só a mim como também outros alunos que passavam pelo mesmo. <a href="https://github.com/Cledersonbc/restaura-pendrive" target="_blank">[Ler mais]</a></p>'
            },
            {
                logo: `./img/projects/summaryze.png`,
                name: 'Summaryze',
                url: 'https://github.com/autociencia/summaryze',
                description: '<p>Uma solução online que gera o sumário de artigos Blogspot baseado nos títulos da publicação. <a href="https://summaryze.herokuapp.com" target="_blank">Você pode testá-la aqui<a/>. A solução teve o back-end feito em Python com Flask e o Front-end em TypeScript com Bulma e SASS.</p><p> O projeto iniciou como um script em Python, mas acabei expandindo-o para que outras pessoas pudessem usar. <a href="https://github.com/autociencia/summaryze" target="_blank">[Ler mais]</a></p>'
            },
            {
                logo: `./img/projects/autociencia.png`,
                name: 'Autociência',
                url: 'https://autociencia.blogspot.com/',
                description: '<p>Blog para divulgação de ciência e tecnologia, com ênfase na ciência da computação e engenharia de software.</p><p>É um projeto que criei com um amigo do ensino técnico e o mantemos até o momento. <a href="https://autociencia.blogspot.com/" target="_blank">[Ler mais]</a></p>'
            },
            {
                logo: `./img/projects/tic-tac-toe.svg`,
                name: 'Tic-tac-toe-minimax',
                url: 'https://github.com/Cledersonbc/tic-tac-toe-minimax',
                description: '<p>Implementação em Python do algoritmo Minimax para criar uma inteligência artificial para o jogo da velha.</p><p>É o meu projeto mais popular no Github, além de também ser bem difundido por estudantes de IA em vários países. <a href="https://github.com/Cledersonbc/tic-tac-toe-minimax" target="_blank">[Ler mais]</a></p>'
            }
        ];
    }

}