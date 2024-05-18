import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AboutMe } from 'src/app/interfaces/about-me.interface';

@Component({
  selector: 'c-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements AfterViewInit{
  
  @ViewChild('desc')
  public desc!: ElementRef<HTMLParagraphElement>;
  
  @Input()
  public cards: AboutMe = {} as AboutMe;
  
  ngAfterViewInit(): void {
    this.desc.nativeElement.innerHTML = this.cards.paragraph;
  }
  
}
