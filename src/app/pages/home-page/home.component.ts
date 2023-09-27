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
      name: 'GitHub',
      href: 'https://github.com/miguel-124C',
      icon: 'pi pi-github'
    },{
      name: 'LinkEdin',
      href: 'https://www.linkedin.com/in/miguel-cuellar-013a96258/',
      icon: 'pi pi-linkedin'
    },{
      name: 'Gmail',
      href: '',
      icon: 'fa-solid fa-envelope'
    }
  ];

}
