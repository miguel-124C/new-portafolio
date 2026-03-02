import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'db/db-proyects';
import { CategoryWork, Wokrs } from 'src/app/interfaces';
import { _angular } from '../../../../db/styleTecnologys';

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
  public listProyects: Wokrs[] = Proyects.filter( p => p.category != 'inProgress' );
  public listProyectsInProgress: Wokrs[] = Proyects.filter( p => p.category == 'inProgress' );
  public currentCategory: CategoryWork = 'All';

  public isProyectInProgress: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParamMap.subscribe((p)=> {
      // inProgress
      const category = p.get('category') as CategoryWork;
      if(!category) return;
      if( category == 'inProgress' && !this.isProyectInProgress ) {
        this.toggleProyects();
        return;
      }

      this.filterByCategory(category);
    });
  }

  public filterByCategory( category: CategoryWork ): void{
    this.currentCategory = category;
    if (category == 'All'){
      this.listProyects = Proyects.filter( p => p.category != 'inProgress' );
    } else {
      this.listProyects = Proyects;
      this.listProyects = this.listProyects.filter( proyect => proyect.category == category && proyect.category != 'inProgress' );
    }

    this.addCategory(category);
  }

  public onChangeOffset( offset: number ){
    // console.log(offset)
  }

  public toggleProyects() {
    this.isProyectInProgress = !this.isProyectInProgress;
    if (this.isProyectInProgress) {
      this.addCategory('inProgress');
    } else {
      this.addCategory('All');
    }
  }

  private addCategory(category: CategoryWork) {
    this.router.navigate(['/'], {
      queryParams: { category },
      queryParamsHandling: 'merge' 
    });
  }

}