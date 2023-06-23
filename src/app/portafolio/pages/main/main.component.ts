import { Component } from '@angular/core';
import { GalleriaResponsiveOptions } from 'primeng/galleria';

@Component({
  selector: 'portafolio-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public images:undefined = undefined;

  public responsiveOptions: GalleriaResponsiveOptions[] = [];
}
