import { Component, OnInit } from '@angular/core';
import { ListServices } from '../interfaces/services-list.interface';

@Component({
  selector: 'principal',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})

export class LayoutsComponent implements OnInit {

  public listService: ListServices[] = [
    {
      title: 'Diseño Responsive',
      description: `Me especializo en hacer que una web sea responsive `
    },{
      title: 'Diseño UI',
      description: `lfjaskldfj`
    },{
      title: 'API REST',
      description: ``
    },{
      title: 'Reportes',
      description: `Tengo experiencia en reportes con JasperReports`
    },
  ];

  constructor() { }
  ngOnInit() { }

}