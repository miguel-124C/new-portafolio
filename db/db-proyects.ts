import { Wokrs } from "src/app/interfaces/works.interface";
import { UrlPersonals, NAMEGITHUB } from "./dataPersonal";
import { _angular, _bootstrap, _css, _express, _html, _java, _js, _nest, _node, _python, _sass, _tailwind, _ts } from "./styleTecnologys";

const pathImages = 'assets/img/proyects';
const pathGitHubPage = `https://${NAMEGITHUB}.github.io`;
const pathGithubCode = UrlPersonals.gitHub;

export const Proyects: Wokrs[] = [
  {
    srcImg:`${pathImages}/kevin-bacon-game.png`,
    name:'Kevin Bacon Game',
    hrefDemo:`https://youtu.be/ZmjoaaNWn6Y?si=iCyVOgyTnjidnLCb`,
    hrefCode: `${pathGithubCode}/front-six-degrees-separation`,
    useTecnology: [ _angular, _tailwind, _python ],
    category: 'Game',
  },{
    srcImg:`${pathImages}/whatsapp-cloud.png`,
    name:'WhatsApp',
    hrefDemo:`https://youtube.com/shorts/CuBcWPlwQlw?feature=share`,
    hrefCode: `${pathGithubCode}/whatsApp-Chat-Front`,
    useTecnology: [ _html, _css, _js, _express, _ts ],
    category: 'Apis',
  }
  // ,{
  //   srcImg:`${pathImages}/app-alarma-js.png`,
  //   name:'RelojApp',
  //   hrefDemo:`${pathGitHubPage}/Cronometro-Alarma`,
  //   hrefCode: `${pathGithubCode}/Cronometro-Alarma`,
  //   useTecnology: [ _html, _css, _js, ],
  //   category: 'Crud',
  // }
  ,{
    srcImg:`${pathImages}/relojRgb.png`,
    name:'Reloj - Rgb',
    hrefDemo:`${pathGitHubPage}/RelojRgb`,
    hrefCode: `${pathGithubCode}/RelojRgb`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Style'
  },{
    srcImg:`${pathImages}/gato.png`,
    name: '3 en raya',
    hrefDemo:`${pathGitHubPage}/Gato-3EnRaya`,
    hrefCode: `${pathGithubCode}/Gato-3EnRaya`,
    useTecnology: [ _js, _css, _html ],
    category: 'Game'
  },{
    srcImg:`${pathImages}/ritmo.png`,
    name:'Ritmo',
    hrefDemo:`${pathGitHubPage}/Memoriza-la-cancion`,
    hrefCode: `${pathGithubCode}/Memoriza-la-cancion`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Game'
  },{
    srcImg:`${pathImages}/sudoku.png`,
    name:'Sudoku',
    hrefDemo:`${pathGitHubPage}/Sudoku`,
    hrefCode: `${pathGithubCode}/Sudoku`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Game'
  },{
    srcImg:`${pathImages}/app-reloj-angular.png`,
    name: 'AppReloj',
    hrefDemo: 'https://app-reloj.netlify.app/reloj',
    hrefCode: `${pathGithubCode}/AppReloj-Front-End`,
    useTecnology: [ _angular, _ts, _sass, _nest ],
    category: 'Crud'
  },{
    srcImg:`${pathImages}/cieloscopio.webp`,
    name:'Cieloscopio',
    hrefDemo:`https://youtu.be/X-qBLEfuKc8`,
    hrefCode: `${pathGithubCode}/Cieloscopio`,
    useTecnology: [ _java ],
    category: 'Consola'
  },{
    srcImg:`${pathImages}/pelis.png`,
    name:'Pelis',
    hrefDemo:`${pathGitHubPage}/Info-Movies`,
    hrefCode: `${pathGithubCode}/Info-Movies`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Apis'
  },{
    srcImg:`${pathImages}/encriptador.png`,
    name:'Encriptador',
    hrefDemo:`${pathGitHubPage}/Encriptador-Alura`,
    hrefCode: `${pathGithubCode}/Encriptador-Alura`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Otros'
  },{
    srcImg:`${pathImages}/rick-morty.png`,
    name: 'Rick & Morty',
    hrefDemo:`${pathGitHubPage}/ProyectoCursoDeSisco`,
    hrefCode: `${pathGithubCode}/ProyectoCursoDeSisco`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Apis'
  },
  // {
  //   srcImg:`${pathImages}/numero.png`,
  //   name: 'Numero',
  //   hrefDemo:`${pathGitHubPage}/Random-number`,
  //   hrefCode: `${pathGithubCode}/Random-number`,
  //   useTecnology: [ _html, _css, _js, ],
  //   category: 'Game'
  // },{
  //   srcImg:`${pathImages}/gifts.png`,
  //   name:'Gifts App',
  //   hrefDemo:'https://giftsa44.netlify.app',
  //   hrefCode: `${pathGithubCode}/gifs-app`,
  //   useTecnology: [ _angular, _ts, _bootstrap ],
  //   category: 'Cursos'
  // },{
  //   srcImg:`${pathImages}/country.png`,
  //   name:'Country App',
  //   hrefDemo:'https://countries-app4.netlify.app/countries/by-capital',
  //   hrefCode: `${pathGithubCode}/countryApp`,
  //   useTecnology: [ _angular, _ts, _bootstrap ],
  //   category: 'Cursos'
  // },
  // {
  //   srcImg:`${pathImages}/conversores.png`,
  //   name:'Conversores',
  //   hrefDemo:'https://coversores.netlify.app/conversor/monedas',
  //   hrefCode: `${pathGithubCode}/ConversorTs`,
  //   useTecnology: [ _angular, _ts, _sass ],
  //   category: 'Otros'
  // },
  {
    srcImg:`${pathImages}/maps.png`,
    name:'Maps App',
    hrefDemo:'https://mapsapplication.netlify.app/maps/fullScreen',
    hrefCode: `${pathGithubCode}/09-mapsApp`,
    useTecnology: [ _angular, _ts, _bootstrap ],
    category: 'Otros'
  },{
    srcImg:``,
    name:'StoreFree',
    hrefDemo:'#',
    hrefCode: `#`,
    useTecnology: [ _angular, _ts, _nest ],
    category: 'Otros',
    inProgress: true
  },{
    srcImg:``,
    name:'Tetris',
    hrefDemo:'#',
    hrefCode: `#`,
    useTecnology: [ _java ],
    category: 'Game',
    inProgress: true
  }
];