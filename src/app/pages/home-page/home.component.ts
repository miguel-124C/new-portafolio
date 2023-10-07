import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/interfaces/redes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  redes: Redes[] = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/59178071967?text=Me%20interesaria%20saber%20mas%20de%20ti',
      icon: 'pi pi-whatsapp',
      color: 'green'
    },{
      name: 'GitHub',
      href: 'https://github.com/miguel-124C',
      icon: 'pi pi-github',
      color: 'black'
    },{
      name: 'LinkEdin',
      href: 'https://www.linkedin.com/in/miguel-cuellar-013a96258/',
      icon: 'pi pi-linkedin',
      color: '#1257cc'
    },{
      name: 'Gmail',
      href: 'mailto:mikicuellar20@gmail.com',
      icon: 'fa-solid fa-envelope',
      color: 'red'
    }
  ];

}
