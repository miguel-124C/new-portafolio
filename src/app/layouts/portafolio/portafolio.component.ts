import { Component } from '@angular/core';
import { Avanzado, Basicos, Intermedio } from 'db/db-proyects';
import { Galeria } from 'src/app/interfaces/imagen.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {

  proyectsBasicos: Galeria[] = Basicos;
  proyectsIntermedio: Galeria[] = Intermedio;
  proyectsAvanzado: Galeria[] = Avanzado;

}
