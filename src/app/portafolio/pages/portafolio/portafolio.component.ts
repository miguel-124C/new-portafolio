import { Component } from '@angular/core';
import { Proyecto } from '../../interfaces/proyectos.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  public proyectos: Proyecto[] = [
    {
      name: 'relojApp',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-clock',
      status: 'Reloj App',
      image: '1.png',
      href: 'https://miguel-124c.github.io/CRUD-Reloj'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Reloj Rgb',
      image: '2.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Juego',
      image: '3.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Sudoku',
      image: '4.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Peliculas',
      image: '5.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Añadir Tares',
      image: '6.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Calendario',
      image: '7.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Encriptador',
      image: '8.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    },{
      name: 'relojRgb',
      color: 'red',
      date: '22/10/2002',
      icon: 'pi pi-github',
      status: 'Datos Del Tiempo',
      image: '9.png',
      href: 'https://miguel-124c.github.io/Reloj/'
    }
  ]
}
