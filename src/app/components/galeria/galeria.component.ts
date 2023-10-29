import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Galeria } from 'src/app/interfaces/imagen.interface';

@Component({
  selector: 'c-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  ngOnInit(): void {
    this.changeSizeResponsive();
  }

  @Input()
  public proyects: Galeria[] = [];

  sizeProject: number = 600;

  public animation: Keyframe[] = [
    { transform: 'translateX(-500px)'}
  ];

  public options: KeyframeAnimationOptions = {
    duration: 1000,
    direction: 'normal',
    fill: 'forwards',
  }

  showRadioSelect(i: number){
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".buttons");
    
    buttons.forEach(button => {
      
      button.classList.contains(String(i))
        ? button.style.background = "var(--blue-400)"
        : button.style.background = "transparent";
    });
  }

  nextProyect(i: number){
    this.showRadioSelect(i);
    const proyectos = document.querySelectorAll(".proyectos");
    proyectos.forEach(p => {
      console.log(this.sizeProject);
      p.setAttribute("style",`transform : translateX(-${this.sizeProject * i}px)`);
    });
  }

  changeSizeResponsive(){
    let widthWindow: number = window.outerWidth;

    if (widthWindow <= 720) {
      this.sizeProject = 500;
    }
    if (widthWindow <= 550) {
      this.sizeProject = 400;
    }
    if (widthWindow <= 480) {
      this.sizeProject = 300;
    }
    if (widthWindow <= 350) {
      this.sizeProject = 250;
    }else{
      this.sizeProject = 600;
    }
  }

}
