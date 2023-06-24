import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Sections } from './portafolio/interfaces/sections.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  public sections: Sections[] = [
    {
      title: 'About-me',
      img: 'about-me.jpeg'
    },{
      title: 'Skills',
      img: 'services.jpeg'
    },{
      title: 'Portafolio',
      img: 'portafolio.jpeg'
    }
  ];
}
