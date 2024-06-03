import { AfterViewInit, Component } from '@angular/core';
import { GMAIL, PHONE, UrlPersonals } from 'db/dataPersonal';
import { Redes } from 'src/app/interfaces';

@Component({
  selector: 'app-contac-me-section',
  templateUrl: './contac-me-section.component.html',
  styleUrls: ['./contac-me-section.component.scss'],
})
export class ContacMeSectionComponent implements AfterViewInit {

  public urlPersonals = {};
  public redes: Redes[] = [];

  public constructor(){
    this.urlPersonals = UrlPersonals;

  }

  ngAfterViewInit(): void {
    this.redes = [
      {
        href: UrlPersonals.whatsApp,
        icon: 'fa-brands fa-whatsapp fa-2xl',
        title: `+${PHONE}`
      },{
        href: UrlPersonals.gmail,
        icon: 'fa-solid fa-envelope fa-2xl',
        title: GMAIL,
      },{
        href: UrlPersonals.linkEdin,
        icon: 'fa-brands fa-linkedin fa-2xl',
        title: 'LinkEdin'
      },{
        href: `tel:${PHONE}`,
        icon: 'fa-solid fa-phone fa-2xl',
        title: `+${PHONE}`
      },{
        href: '',
        icon: 'fa-solid fa-location-dot fa-2xl',
        title: 'Santa Cruz - Bolivia'
      },
    ]
  }

}