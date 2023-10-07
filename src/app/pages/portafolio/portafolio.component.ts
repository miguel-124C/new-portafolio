import { Component } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { Carousel } from 'src/app/interfaces/imagen.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {

  products: Carousel[] = [
    {
      image:'assets/img/1.png',      
      desc: `Creado inicialmente sin ningun framework. Optimizado con Angular.
          Tiene las funcionalidades de todo reloj: cuenta con cronometro, temporizador, reloj, y alarmas.
          Hice propiamente un crud para la parte de alarmas`,
      name:'RelojApp',
      href:'https://miguel-124c.github.io/cronometro/'
    },{
      image:'assets/img/2.png',
      desc: `Tiene un bonito efecto al cambiar de colores cada cierto tiempo, hecho solamente con html, css y js 
          `,
      name:'RelojRgb',
      href:'https://miguel-124c.github.io/Reloj/'
    },{
      image:'assets/img/3.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/Memoriza-la-cancion/'
    },{
      image:'assets/img/4.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/Sudoku/'
    },{
      image:'assets/img/5.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/Info-Movies/'
    },{
      image:'assets/img/6.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/CRUD-Lista-de-tareas/'
    },{
      image:'assets/img/7.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/Calendario-Object-Date-/'
    },{
      image:'assets/img/8.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/Encriptador-Alura/'
    },{
      image:'assets/img/9.png',      
      desc: 'algo',
      name:'title',
      href:'https://miguel-124c.github.io/datosMeteorologicas/'
    }
  ];

  getSeverity(a: string){
  
  }


  // breakpoint: string;
  // /**
  //  * The number of visible items on breakpoint.
  //  */
  // numVisible: number;
  // /**
  //  * The number of scrolled items on breakpoint.
  //  */
  // numScroll: number;

  public responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '720px',
      numVisible: 2,
      numScroll: 2,
    }
  ];
}
