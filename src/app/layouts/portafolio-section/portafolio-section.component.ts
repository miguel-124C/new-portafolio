import { Component } from '@angular/core';
import { Proyects } from 'db/db-proyects';
import { Galeria } from 'src/app/interfaces/imagen.interface';
import { Wokrs } from 'src/app/interfaces/works.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio-section.component.html',
  styleUrls: ['./portafolio-section.component.scss']
})
export class PortafolioComponent {

  listProyects: Wokrs[] = Proyects;

}
