import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/interfaces/about-me.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  edad: number = this.calcularEdad('2002-10-22');

  ngOnInit(): void {}

  calcularEdad(fechaNacimiento: string): number{
    let hoy = new Date();
    let cumpleanos = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    
    return edad;
  }

  public dataPersonal: AboutMe[] = [
    {
      title: 'Información Personal',
      paragraph: `
        Me llamo Miguel Angel Cuellar Serrudo tengo ${this.edad} años.<br>
        Me apasiona mucho el área de Desarrollo de Software
      `
    },{
      title: 'Estudios',
      paragraph: `Soy estudiante de la carrera Ingeniería Informática me encuentro en mi 2 año.<br>
      Desde el 2018 empece a aprender por cuenta propia lo que de desarrollo web, me encantó mucho que 
      quise aprender mas inscribiendome a cursos Online:
      <ul style="padding: 5px 0 0 10px">
        <li>-En Cisco (Curso de Programacion con JavaScript) para obtener el titulo ya que tenia conocimiento previo.</li>
        <li>-En del programa de capacitación de Alura Latam</li>
        <li>-Capacitacion en la UAGRM (Desarrollo Web)</li>
        <li>-Cuso en Udemy: Angular de 0 a Experto</li>
        <li>-Curso en Devtalles: Angular Avanzado (En proceso de Aprendizaje)</li>
      </ul>`
    },{
      title: 'Experiencia Laboral',
      paragraph: `
      Actualmente cuento con 5 meses de trabajo en la Empresa TicSys como pasante, estoy en el area de Desarrollo
      Trabajando con Tecnologías como: Angular, .NET, PostGres
      `
    },{
      title: 'Titulos',
      paragraph: 'Mis estudios'
    }
  ];

}
