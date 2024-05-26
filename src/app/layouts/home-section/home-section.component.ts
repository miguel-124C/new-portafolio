import { Component, OnInit } from '@angular/core';
import { UrlPersonals } from 'db/dataPersonal';
import { Redes } from 'src/app/interfaces/redes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeComponent {

  redes: Redes[] = [
    {
      href: UrlPersonals.whatsApp,
      icon: 'pi pi-whatsapp',
    },{
      href: UrlPersonals.gitHub,
      icon: 'pi pi-github',
    },{
      href: UrlPersonals.linkEdin,
      icon: 'pi pi-linkedin',
    },
  ];

  // {
  //   href: 'mailto:mikicuellar20@gmail.com',
  //   icon: 'fa-solid fa-envelope',
  // }

}
