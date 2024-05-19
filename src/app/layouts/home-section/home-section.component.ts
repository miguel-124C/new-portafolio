import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/interfaces/redes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeComponent {

  redes: Redes[] = [
    {
      href: 'https://wa.me/59178071967',
      icon: 'pi pi-whatsapp',
    },{
      href: 'https://github.com/miguel-124C',
      icon: 'pi pi-github',
    },{
      href: 'https://www.linkedin.com/in/miguel-cuellar-013a96258/',
      icon: 'pi pi-linkedin',
    },
  ];

  // {
  //   href: 'mailto:mikicuellar20@gmail.com',
  //   icon: 'fa-solid fa-envelope',
  // }

}
