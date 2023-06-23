import { Component } from '@angular/core';
import { Sections } from '../../interfaces/sections.interface';

@Component({
  selector: 'portafolio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public sections: Sections[] = [
    {
      title: 'About me',
      img: 'about-me.jpeg'
    },{
      title: 'Services',
      img: 'services.jpeg'
    },{
      title: 'Portafolio',
      img: 'portafolio.jpeg'
    }
  ];
}
