import { Component, Input } from '@angular/core';
import { Sections } from 'src/app/portafolio/interfaces/sections.interface';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {
  
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
