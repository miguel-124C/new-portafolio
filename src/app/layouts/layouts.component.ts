import { AfterViewInit, Component, inject } from '@angular/core';
import { ListServices } from '../interfaces/services-list.interface';
import { fromEvent, map } from 'rxjs';
import { IndexDirectionService } from '../services/index-position.service';

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

  // public listService: ListServices[] = [
  //   {
  //     title: 'Diseño Responsive',
  //     description: `Me especializo en hacer que una web sea responsive `
  //   },{
  //     title: 'Diseño UI',
  //     description: `lfjaskldfj`
  //   },{
  //     title: 'API REST',
  //     description: ``
  //   },{
  //     title: 'Reportes',
  //     description: `Tengo experiencia en reportes con JasperReports`
  //   },
  // ];

  public showHeaderIn: number = 500;
  public showHeaderFixed: boolean = false;

  private indexPositionService = inject( IndexDirectionService );

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

        sections.forEach( (section, index)=>{
          const sectionTop = section.offsetTop; // Distancia entre el viewPort y el elemento
          const sectionHeight = section.getBoundingClientRect().height; // Tamaño del elemento
          const scrollPosition = scrollTop; // position del scroll
          const zonaSection = sectionTop + sectionHeight; // Rango del elemento

          if (scrollPosition >= sectionTop && scrollPosition < zonaSection) {
            this.indexPositionService.currentIndex.set( index );
          }
        });
      }
    });
  }

}