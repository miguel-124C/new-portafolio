import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/interfaces/about-me.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  edad!: number;

  ngOnInit(): void {
    this.calcularEdad('2002-10-22');
    console.log(this.edad);
  }

  calcularEdad(fechaNacimiento: string){
    let hoy = new Date();
    let cumpleanos = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    
    this.edad = edad;
  }

  public dataPersonal: AboutMe[] = [
    {
      title: 'Información Personal',
      paragraph: 'Me llamo Miguel'
    },{
      title: 'Estudios',
      paragraph: 'Mis estudios'
    },{
      title: 'Experiencia Laboral',
      paragraph: 'Mis estudios'
    },{
      title: 'Titulos',
      paragraph: 'Mis estudios'
    }
  ];

}
