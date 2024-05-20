import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AboutMe } from 'src/app/interfaces/about-me.interface';

@Component({
  selector: 'c-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  
  @Input()
  public data: AboutMe = {} as AboutMe;
  
}
