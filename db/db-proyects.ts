import { Wokrs } from "src/app/interfaces/works.interface";
import { UrlPersonals, NAMEGITHUB } from "./dataPersonal";
import { _angular, _bootstrap, _css, _html, _js, _nest, _sass, _ts } from "./styleTecnologys";

const pathImages = 'assets/img/proyects';
const pathGitHubPage = `https://${NAMEGITHUB}.github.io`;
const pathGithubCode = UrlPersonals.gitHub;

export const Proyects: Wokrs[] = [
  {
    srcImg:`${pathImages}/app-alarma-js.png`,
    name:'RelojApp',
    hrefDemo:`${pathGitHubPage}/Cronometro-Alarma`,
    hrefCode: `${pathGithubCode}/Cronometro-Alarma`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Crud',
  },{
    srcImg:`${pathImages}/relojRgb.png`,
    name:'RelojRgb',
    hrefDemo:`${pathGitHubPage}/RelojRgb`,
    hrefCode: `${pathGithubCode}/RelojRgb`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Style'
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
    category: 'Cursos'
  },{
    srcImg:`${pathImages}/clima.png`,
    name:'Clima',
    hrefDemo:`${pathGitHubPage}/datosMeteorologicas`,
    hrefCode: `${pathGithubCode}/datosMeteorologicas`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Apis'
  },{
    srcImg:`${pathImages}/rick-morty.png`,
    name: 'Rick & Morty',
    hrefDemo:`${pathGitHubPage}/ProyectoCursoDeSisco`,
    hrefCode: `${pathGithubCode}/ProyectoCursoDeSisco`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Apis'
  },{
    srcImg:`${pathImages}/numero.png`,
    name: 'Numero',
    hrefDemo:`${pathGitHubPage}/Random-number`,
    hrefCode: `${pathGithubCode}/Random-number`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Game'
  },{
    srcImg:`${pathImages}/gifts.png`,
    name:'Gifts App',
    hrefDemo:'https://giftsa44.netlify.app',
    hrefCode: `${pathGithubCode}/gifs-app`,
    useTecnology: [ _angular, _ts, _bootstrap ],
    category: 'Cursos'
  },{
    srcImg:`${pathImages}/country.png`,
    name:'Country App',
    hrefDemo:'https://countries-app4.netlify.app/countries/by-capital',
    hrefCode: `${pathGithubCode}/countryApp`,
    useTecnology: [ _angular, _ts, _bootstrap ],
    category: 'Cursos'
  },{
    srcImg:`${pathImages}/conversores.png`,
    name:'Conversores',
    hrefDemo:'https://coversores.netlify.app/conversor/monedas',
    hrefCode: `${pathGithubCode}/ConversorTs`,
    useTecnology: [ _angular, _ts, _sass ],
    category: 'Otros'
  },{
    srcImg:`${pathImages}/maps.png`,
    name:'Maps App',
    hrefDemo:'https://mapsapplication.netlify.app/maps/fullScreen',
    hrefCode: `${pathGithubCode}/09-mapsApp`,
    useTecnology: [ _angular, _ts, _bootstrap ],
    category: 'Cursos'
  },{
    srcImg:`${pathImages}/app-reloj-angular.png`,
    name: 'AppReloj',
    hrefDemo: 'https://app-reloj.netlify.app/alarma',
    hrefCode: `${pathGithubCode}/AppReloj-Front-End`,
    useTecnology: [ _angular, _ts, _sass, _nest ],
    category: 'Crud'
  },{
    srcImg:`${pathImages}/gato.png`,
    name: 'Gato 3 en raya',
    hrefDemo:`${pathGitHubPage}/Gato-3EnRaya`,
    hrefCode: `${pathGithubCode}/Gato-3EnRaya`,
    useTecnology: [ _js, _css, _html ],
    category: 'Game'
  },
];