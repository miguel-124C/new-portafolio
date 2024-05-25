import { Component, Input, OnInit } from '@angular/core';
import { Galeria } from 'src/app/interfaces/imagen.interface';
import { Wokrs } from 'src/app/interfaces/works.interface';

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

  sizeProject: number = 600;

  public animation: Keyframe[] = [
    { transform: 'translateX(-500px)'}
  ];

  public options: KeyframeAnimationOptions = {
    duration: 1000,
    direction: 'normal',
    fill: 'forwards',
  }


}
