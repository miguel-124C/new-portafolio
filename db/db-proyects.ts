import { Works } from "src/app/interfaces/works.interface";
import { UrlPersonals, NAMEGITHUB } from "./dataPersonal";
import { _angular, _bootstrap, _css, _docker, _express, _html, _java, _js,
  _nest, _node, _postgres, _python, _sass, _tailwind, _ts, _dotnet } from "./styleTecnologys";

const pathImages = 'assets/img/proyects';
const pathGitHubPage = `https://${NAMEGITHUB}.github.io`;
const pathGithubCode = UrlPersonals.gitHub;
const itch = UrlPersonals.itch;

export const Proyects: Works[] = [
  {
    srcImg:`${pathImages}/whatsapp-cloud.png`,
    name:'WhatsApp',
    hrefDemo:`https://youtube.com/shorts/CuBcWPlwQlw?feature=share`,
    hrefCode: `${pathGithubCode}/whatsApp-Chat-Front`,
    useTecnology: [ _html, _css, _js, _express, _ts ],
    category: 'Apis',
  },{
    srcImg:`${pathImages}/relojRgb.png`,
    name:'Reloj - Rgb',
    hrefDemo:`${pathGitHubPage}/RelojRgb`,
    hrefCode: `${pathGithubCode}/RelojRgb`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Style'
  },{
    srcImg:`${pathImages}/cieloscopio.webp`,
    name:'Cieloscopio',
    hrefDemo:`https://youtu.be/X-qBLEfuKc8`,
    hrefCode: `${pathGithubCode}/Cieloscopio`,
    useTecnology: [ _java ],
    category: 'Consola'
  },{
    srcImg:`${pathImages}/gato.png`,
    name: '3 en raya',
    hrefDemo:`${pathGitHubPage}/Gato-3EnRaya`,
    hrefCode: `${pathGithubCode}/Gato-3EnRaya`,
    useTecnology: [ _js, _css, _html ],
    category: 'Game'
  },{
    srcImg:`${pathImages}/sudoku.png`,
    name:'Sudoku',
    hrefDemo:`${pathGitHubPage}/Sudoku`,
    hrefCode: `${pathGithubCode}/Sudoku`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Game'
  },{
    srcImg: `${pathImages}/flappyBird.png`,
    name: 'FlappyBird',
    hrefDemo: `${itch}/flappybird`,
    hrefCode: `${pathGithubCode}/FlappyBird`,
    useTecnology: [_java],
    category: 'Game'
  },{
    srcImg: `${pathImages}/tetris.png`,
    name: 'Tetris',
    hrefDemo: `${itch}/tetris-monogame-edition`,
    hrefCode: `${pathGithubCode}/TetrisMonoGame`,
    useTecnology: [_java],
    category: 'Game'
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
  },{
    srcImg:`${pathImages}/ritmo.png`,
    name:'Ritmo',
    hrefDemo:`${pathGitHubPage}/Memoriza-la-cancion`,
    hrefCode: `${pathGithubCode}/Memoriza-la-cancion`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Game'
  },{
    srcImg:`${pathImages}/maps.png`,
    name:'Maps App',
    hrefDemo:'https://mapsapplication.netlify.app/maps/fullScreen',
    hrefCode: `${pathGithubCode}/09-mapsApp`,
    useTecnology: [ _angular, _ts, _bootstrap ],
    category: 'Otros'
  },{
    srcImg:`${pathImages}/kevin-bacon-game.png`,
    name:'KevinBaconGame',
    hrefDemo:`https://youtu.be/ZmjoaaNWn6Y?si=iCyVOgyTnjidnLCb`,
    hrefCode: `${pathGithubCode}/front-six-degrees-separation`,
    useTecnology: [ _angular, _tailwind, _python ],
    category: 'Game',
  },{
    srcImg:`${pathImages}/pelis.png`,
    name:'Pelis',
    hrefDemo:`${pathGitHubPage}/Info-Movies`,
    hrefCode: `${pathGithubCode}/Info-Movies`,
    useTecnology: [ _html, _css, _js, ],
    category: 'Apis'
  },{
    srcImg:``,
    name:'StoreFree',
    hrefDemo:'https://www.youtube.com/embed/V28Ry8aqJN8',
    hrefCode: `#`,
    useTecnology: [ _angular, _nest, _postgres, _docker ],
    category: 'inProgress',
    description: `Ecommerce de publicaciones para vender y comprar. Con metodo de pago ficticio, se esta desarrollando de apoco y usando muchas herramientas`,
  }
  // ,{
  //   srcImg:``,
  //   name:'Galaga',
  //   hrefDemo:'',
  //   hrefCode: `#`,
  //   useTecnology: [ _dotnet ],
  //   category: 'inProgress',
  //   description: `
  //     Videojuego retro desarrollandose en C# con el framework Monogame.\n
  //     Implementando la arquitectura ECS y patrones de diseños tales como:\n
  //       Patron Observer y el Factory.
  //   `,
  // }
];