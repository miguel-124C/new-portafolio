import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/interfaces/about-me.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  edad: number = this.calcularEdad('2002-10-22');
  textColorLinks: string = 'var(--blue-400)';

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
        Me apasiona mucho el área de Desarrollo de Software;
        Me considero una persona que aprende rápido, me encuentro
        en etapa de aprendizaje, con conocimientos de desarrollo web
        intermedios. Tengo conocimientos medio-avanzado en Angular como Front-End.<br>
        Soy mas del Front, pero mi meta es llegar a ser un FullStack.
        Tengo experiencia trabajando en equipo.
      `,
      icon: 'fa-solid fa-user'
    },{
      title: 'Estudios',
      paragraph: `Soy estudiante de la carrera Ingeniería Informática de la Universidad Autonoma Gabriel Rene Moreno me encuentro en mi 2 año.<br>
      Desde el 2020 empece a aprender por cuenta propia lo que de desarrollo web, me encantó mucho que 
      quise aprender mas inscribiendome a cursos Online:
      <ul style="padding: 5px 0 0 10px">
        <li>-En Cisco (Curso de Programacion con JavaScript) para obtener el titulo ya que tenia conocimiento previo.</li>
        <li>-En del programa de capacitación de Alura Latam aprendi Java como Back-End y MySql en Base de Datos</li>
        <li>-Capacitacion en la UAGRM (Desarrollo Web)</li>
        <li>-Cuso en Udemy: Angular de 0 a Experto</li>
        <li>-Curso en Devtalles: Angular Avanzado (En proceso de Aprendizaje)</li>
        <li>-Curso en Devtalles: Node.js (En proceso de Aprendizaje)</li>
      </ul>`,
      icon: 'fa-solid fa-book'
      
    },{
      title: 'Experiencia Laboral',
      paragraph: `
      Actualmente cuento con 5 meses de trabajo en la Empresa TicSys como pasante, estoy en el area de Desarrollo
      Trabajando con Tecnologías como: Angular, .NET, PostGres, Jasper... Me encuentro realizando sistemas para empresas:
      Sistemas de Almacen, Inventario, compras y ventas. Al estar como pasante me estoy adaptando al equipo de programadores
      estoy adquiriendo experiencia al trabajar en equipo. Llevando meses trabajando con ellos, me siento capaz de ayudar
      no solo del lado del Front-End sino tambien del lado del Back-End y Base de Datos.
      `,
      icon: 'fa-solid fa-file-invoice-dollar'
      
    },{
      title: 'Certificados',
      paragraph: `

      <a style='color: ${this.textColorLinks}' target='_blank' 
      href='https://app.aluracursos.com/user/mikicuellar20/fullCertificate/8c57709cdf5ed18f804fdf0e4788e26d'>
        Certificado de Programa de Alura Latam.
      </a>
      
      <a style='color: ${this.textColorLinks}' target='_blank'
      href='assets/js-certificate.pdf'>
        Curso Programacion con JavaScript (JSE).
      </a>
      
      <a style='color: ${this.textColorLinks}' target='_blank'
      href='https://cursos.devtalles.com/certificates/e7pxxmgke4'>
        Principio SOLID y Clean Code.
      </a>

      `,
      icon: 'fa-solid fa-book-open'
    }
  ];

}
