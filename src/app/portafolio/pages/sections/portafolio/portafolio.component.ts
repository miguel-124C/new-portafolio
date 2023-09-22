import { Component } from '@angular/core';
import { GalleriaResponsiveOptions } from 'primeng/galleria';
import { Imagen } from 'src/app/portafolio/interfaces/imagen.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  public images: Imagen[] = [
    {
      itemImageSrc:'assets/img/1.png',
      thumbnailImageSrc: 'assets/img/1.png',
      alt: `Creado inicialmente sin ningun framework. Optimizado con Angular.
          Tiene las funcionalidades de todo reloj: cuenta con cronometro, temporizador, reloj, y alarmas.
          Hice propiamente un crud para la parte de alarmas`,
      title:'RelojApp',
      href:'https://miguel-124c.github.io/cronometro/'
    },{
      itemImageSrc:'assets/img/2.png',
      thumbnailImageSrc: 'assets/img/2.png',
      alt: `Tiene un bonito efecto al cambiar de colores cada cierto tiempo, hecho solamente con html, css y js 
          `,
      title:'RelojRgb',
      href:'https://miguel-124c.github.io/Reloj/'
    },{
      itemImageSrc:'assets/img/3.png',
      thumbnailImageSrc: 'assets/img/3.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/Memoriza-la-cancion/'
    },{
      itemImageSrc:'assets/img/4.png',
      thumbnailImageSrc: 'assets/img/4.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/Sudoku/'
    },{
      itemImageSrc:'assets/img/5.png',
      thumbnailImageSrc: 'assets/img/5.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/Info-Movies/'
    },{
      itemImageSrc:'assets/img/6.png',
      thumbnailImageSrc: 'assets/img/6.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/CRUD-Lista-de-tareas/'
    },{
      itemImageSrc:'assets/img/7.png',
      thumbnailImageSrc: 'assets/img/7.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/Calendario-Object-Date-/'
    },{
      itemImageSrc:'assets/img/8.png',
      thumbnailImageSrc: 'assets/img/8.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/Encriptador-Alura/'
    },{
      itemImageSrc:'assets/img/9.png',
      thumbnailImageSrc: 'assets/img/9.png',
      alt: 'algo',
      title:'title',
      href:'https://miguel-124c.github.io/datosMeteorologicas/'
    }
  ]

  public responsiveOptions: GalleriaResponsiveOptions[] = [
    {breakpoint:'',numVisible:5}
  ];
}
