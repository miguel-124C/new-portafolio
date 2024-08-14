import { Component, Input, OnInit } from '@angular/core';
import { Wokrs } from 'src/app/interfaces';

@Component({
  selector: 'c-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  public proyect!: Wokrs;

}
