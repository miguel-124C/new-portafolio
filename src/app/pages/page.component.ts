import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Observable, of, pipe } from 'rxjs';

@Component({
    selector: 'selector-name',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {

  public widthWindow!: number;
  banderaMenu: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) {}  
  
  ngOnInit() {
      this.primengConfig.ripple = true;
      this.cambiarMenu();
  }

  cambiarMenu(): void{    
    this.widthWindow = window.outerWidth;

    if (this.widthWindow <= 580) {
      this.banderaMenu = true;
    }else{
      this.banderaMenu = false;
    }
  }

  public items: MenuItem[] = [
      {
        label: 'Home',
        routerLink: '/home',          
        icon: 'pi pi-home'
      },{
        label: 'About Me',
        routerLink: '/about-me',
        icon: 'pi pi-id-card',
      },{
        label: 'Skills',
        routerLink: '/skills',
        icon: 'pi pi-chart-bar'
      },{
        label: 'Portafolio',
        routerLink: '/portafolio',
        icon: 'pi pi-briefcase'
      }
  ];


}