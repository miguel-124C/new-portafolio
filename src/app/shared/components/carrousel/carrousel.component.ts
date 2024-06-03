import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces';

@Component({
  selector: 'c-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {

  @Input()
  public skills!: Skill[];

  
}
