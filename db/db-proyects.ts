import { Galeria } from "src/app/interfaces/imagen.interface";

export const Basicos: Galeria[] = [
  {
    image:'assets/img/1.png',      
    desc: `Tiene las funcionalidades de todo reloj: cuenta con cronometro, temporizador, reloj, y alarmas.
        Hice propiamente un crud para la parte de alarmas.`,
    name:'RelojApp',
    href:'https://miguel-124c.github.io/Cronometro-Alarma/'
  },{
    image:'assets/img/2.png',
    desc: `Tiene un bonito efecto al cambiar de colores cada cierto tiempo.`,
    name:'RelojRgb',
    href:'https://miguel-124c.github.io/RelojRgb/'
  },{
    image:'assets/img/3.png',      
    desc: 'Juego que trata de seguir el ritmo. Sumando puntos cada que acertamos el ritmo',
    name:'Sigue el ritmo',
    href:'https://miguel-124c.github.io/Memoriza-la-cancion/'
  },{
    image:'assets/img/4.png',      
    desc: `Juego de Sudoku, tiene solo 3 intentos, trate de hacerlo con buenos diseños... no es muy intuitivo
          genera toda la respuesta al inicio`,
    name:'Sudoku',
    href:'https://miguel-124c.github.io/Sudoku/'
  },{
    image:'assets/img/5.png',      
    desc: 'Buscador de peliculas, (use la Api omdbapi)',
    name:'Pelis',
    href:'https://miguel-124c.github.io/Info-Movies/'
  },{
    image:'assets/img/6.png',      
    desc: 'CRUD hecho sin base de datos, solamente es local, no es persistente ni nada de eso. En mis inicios de conocer todo sobre base de datos hice este proyecto',
    name:'List Task',
    href:'https://miguel-124c.github.io/CRUD-Lista-de-tareas/'
  },{
    image:'assets/img/7.png',      
    desc: 'Calendario que muestra todos los meses del año actual. Muestra la fecha actual',
    name:'Calendario',
    href:'https://miguel-124c.github.io/Calendario-Object-Date-/'
  },{
    image:'assets/img/8.png',      
    desc: 'Challenge propuesto en la formacion de Alura Latam en la que estuve, logré hacer el diseño basado en Figma.',
    name:'Encriptador',
    href:'https://miguel-124c.github.io/Encriptador-Alura/'
  },{
    image:'assets/img/9.png',
    desc: 'Trae los datos meteorologicos de donde te encuentres. También muestra los datos del tiempo de los proximos 5 días',
    name:'Datos del clima',
    href:'https://miguel-124c.github.io/datosMeteorologicas/'
  },{
    image: 'assets/img/10.png',
    desc: 'Proyecto final del curso de Sisco de JavaScript',
    name: 'Api Rick and Morty',
    href: 'https://miguel-124c.github.io/ProyectoCursoDeSisco/'
  },{
    image: 'assets/img/11.png',
    desc: 'Juego que consiste en adivinar un número random en un cierto tiempo, tiene dificultades que limitan el número de intentos',
    name: 'Acierta el numero',
    href: 'https://miguel-124c.github.io/Random-number/'
  },{
    image: 'assets/img/12.png',
    desc: 'Calculadora hecha con Clases y aplicando la programación orientada a Objectos (POO)',
    name: 'Calculadora',
    href: 'https://miguel-124c.github.io/Calculadora/'
  }
];

export const Intermedio: Galeria[] = [
  {
    image:'assets/img/1.png',      
    desc: `Creado inicialmente sin ningun framework. Optimizado con Angular.
        Tiene las funcionalidades de todo reloj: cuenta con cronometro, temporizador, reloj, y alarmas.
        Hice propiamente un crud para la parte de alarmas`,
    name:'RelojApp',
    href:'https://miguel-124c.github.io/cronometro/'
  }
];

export const Avanzado: Galeria[] = [
  {
    image: 'assets/img/13.png',
    desc: 'CRUD de alarmas basado en el proyecto anterior, le añadí base de datos y Backend con Node.js.',
    name: 'AppReloj',
    href: 'https://app-reloj.netlify.app/alarma',
  }
];