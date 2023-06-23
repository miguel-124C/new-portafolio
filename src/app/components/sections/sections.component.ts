import { Component, Input } from '@angular/core';
import { Sections } from 'src/app/portafolio/interfaces/sections.interface';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {
  
  @Input()
  public sections?: Sections[];

  public displayModal: boolean = false;
  public cardSelect?: number;

  showModal(i: number){
    this.cardSelect = i;
  }
  ocultarModal(i: number){
    this.cardSelect = -1;
  }
}
