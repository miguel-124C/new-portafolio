import { AfterViewInit, Component } from '@angular/core';
import { ListServices } from '../interfaces/services-list.interface';
import { fromEvent, map } from 'rxjs';

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

  showHeaderIn: number = 500;
  showHeaderFixed: boolean = false;

  constructor() { }
  
  ngAfterViewInit(): void {
    this.initEventScroll();
  }

  private initEventScroll(){

    fromEvent<EventMouse>(document, 'scroll')
    .pipe(
      map( ({target}) => (target.documentElement) ),
      map( ({scrollTop})=> scrollTop )
    ).subscribe({
      next: (scrollTop)=> {
        this.showHeaderFixed = (scrollTop > this.showHeaderIn);
      }
    });
  }

}