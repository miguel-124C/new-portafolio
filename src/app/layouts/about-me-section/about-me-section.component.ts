import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/interfaces';

interface DataPersonal {
  title: string;
  icon: string;
  data: AboutMe[],
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeComponent implements OnInit {

  ngOnInit(): void {}

  public experiencia: AboutMe[] = [
    {
      date: '2023(Julio) - 2023(Octubre)',
      title: 'Sistema de Inventario',
      subtitle: 'Participé en la creacion del sistema',
    },{
      date: '2023 - Presente',
      title: 'Sistema de Almacen',
      subtitle: 'Implementando sistema de organizacion de Racks',
    },{
      date: 'Presente',
      title: 'Diseño de Portafolio Empresarial',
      subtitle: 'Participacion en La parte de diseño web',
    },{
      date: 'Presente',
      title: 'Diseño de Reportes',
      subtitle: 'Utilizando JasperReports, reportes para los sistemas hechos',
    }
  ];

  public education: AboutMe[] = [
    {
      date: '2020 - 2022',
      title: 'Cursos de YouTube',
      subtitle: 'de Html, Css y JavaScript',
    },{
      date: '2022(Diciembre) - 2023(Junio)',
      title: 'Programa One Alura',
      subtitle: 'Especialización en BackEnd con Java',
      href: 'https://app.aluracursos.com/user/mikicuellar20/program/5/certificate',
    },{
      date: '2023(Marzo) - 2023(Julio)',
      title: 'Progrmación con JavaScript (Cisco)',
      subtitle: 'Curso avanzado con JavaScript',
    },{
      date: '2023(Junio) - Presente',
      title: 'Cursos de Udemy',
      subtitle: 'Cursos de Angular, Java, ReactiveX Js...',
    },{
      date: 'Presente',
      title: 'BootCamp BackEnd con Java',
      subtitle: 'BootCamp con Alura Latam',
      href: ''
    },{
      date: 'Presente',
      title: 'Cursos en Devtalles',
      subtitle: 'Principios Solid, Visual Studio Code',
      href: ''
    }
  ];


  public dataPersonal: DataPersonal[] = [
    {
      title: 'Experiencia',
      icon: 'fa-sharp fa-solid fa-medal fa-2xl',
      data: this.experiencia,
    },{
      title: 'Educación',
      icon: 'fa-sharp fa-solid fa-graduation-cap fa-2xl',
      data: this.education,
    }
  ];
}
