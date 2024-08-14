import { Component } from '@angular/core';
import { Proyects } from 'db/db-proyects';
import { CategoryWork, Wokrs } from 'src/app/interfaces';

interface Filters {
  name: string;
  category: CategoryWork;
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio-section.component.html',
  styleUrls: ['./portafolio-section.component.scss']
})
export class PortafolioComponent {

  public filters: Filters[] = [
    { name: 'Todos', category: 'All' },
    { name: 'Juegos', category: 'Game' },
    { name: "Api's", category: 'Apis' },
    { name: "Crud", category: 'Crud' },
    { name: "Estilos", category: 'Style' },
    { name: "Cursos", category: 'Cursos' },
    { name: "Otros", category: 'Otros' },
  ];
  public listProyects: Wokrs[] = Proyects;
  public currentCategory: CategoryWork = 'All';

  public filterByCategory( category: CategoryWork ): void{
    this.currentCategory = category;
    if (category == 'All'){
      this.listProyects = Proyects;
      return;
    }

    this.listProyects = Proyects;
    this.listProyects = this.listProyects.filter( proyect => proyect.category == category );
  }

}
