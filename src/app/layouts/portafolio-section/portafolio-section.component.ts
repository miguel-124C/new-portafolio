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
    { name: "Consola", category: 'Consola' },
    { name: "Otros", category: 'Otros' },
  ];
  public listProyects: Wokrs[] = Proyects.filter( p => !p.inProgress );
  public listProyectsInProgress: Wokrs[] = Proyects.filter( p => p.inProgress );
  public currentCategory: CategoryWork = 'All';

  public isProyectInProgress: boolean = false;

  public filterByCategory( category: CategoryWork ): void{
    this.currentCategory = category;
    if (category == 'All'){
      this.listProyects = Proyects;
      return;
    }

    this.listProyects = Proyects;
    this.listProyects = this.listProyects.filter( proyect => proyect.category == category );
  }

  public onChangeOffset( offset: number ){
    // console.log(offset)
  }

  public toggleProyects() {
    this.isProyectInProgress = !this.isProyectInProgress;
  }

}