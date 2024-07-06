import { AfterViewInit, Component, inject } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { HeaderService } from '../services';

interface EventMouse {
  target:{
    documentElement:{
      scrollTop: number,
      scrollHeight: number,
      clientHeight: number,
    }
  }
}

@Component({
  selector: 'principal',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})

export class LayoutsComponent implements AfterViewInit {

  private showHeaderIn: number = 500;
  public showHeaderFixed: boolean = false;
  public isInHome = false;

  private indexPositionService = inject( HeaderService );

  constructor() { }
  
  ngAfterViewInit(): void {
    this.initEventScroll();
  }

  private initEventScroll(){

    fromEvent<EventMouse>(document, 'scroll')
    .pipe(
      map( ({target}) => (target.documentElement) ),
    ).subscribe({
      next: ({scrollTop, clientHeight, scrollHeight})=> {
        this.showHeaderFixed = (scrollTop > this.showHeaderIn);

        const sections: NodeListOf<HTMLElement> = document.querySelectorAll('.page');

        let indexHome = 0;
        sections.forEach( (section, index)=>{
          const sectionTop = section.offsetTop; // Distancia entre el viewPort y el elemento
          const sectionHeight = section.getBoundingClientRect().height; // Tamaño del elemento
          const scrollPosition = scrollTop; // position del scroll
          const zonaSection = sectionTop + sectionHeight; // Rango del elemento

          if (scrollPosition >= sectionTop && scrollPosition < zonaSection) {
            this.indexPositionService.currentIndex.set( index );
          }else{
            indexHome++;
          }
        });

        if (indexHome == sections.length) {
          this.isInHome = true;
          this.indexPositionService.currentIndex.set( -1 );
        }else{
          this.isInHome = false;
        }
      }
    });
  }

}