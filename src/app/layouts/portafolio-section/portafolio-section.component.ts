import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'db/db-proyects';
import { CategoryWork, Works } from 'src/app/interfaces';
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
    // { name: "Crud", category: 'Crud' },
    { name: "Estilos", category: 'Style' },
    { name: "Consola", category: 'Consola' },
    { name: "Otros", category: 'Otros' },
  ];
  public listProyects: Works[] = [];
  public listProyectsInProgress: Works[] = Proyects.filter( p => p.category == 'inProgress' );
  public currentCategory: CategoryWork = 'All';

  public isProyectInProgress: boolean = false;
  public pagination = {
    limit: 8,
    offset: 0,
    count: 0,
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.listProyects = this.initListProyect('All');

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

  private initListProyect(category: CategoryWork){
    const offset = this.pagination.offset * this.pagination.limit;
    const limit = offset + this.pagination.limit;

    const proyects = (category == 'All')
      ? Proyects.filter( p => p.category != 'inProgress')
      : Proyects.filter( p => p.category != 'inProgress' && p.category == category );

    this.pagination.count = proyects.length;

    return proyects.filter(( _, index) => index >= offset && index < limit );
  }

  public filterByCategory( category: CategoryWork ): void{
    this.currentCategory = category;
    this.pagination.offset = 0;

    this.listProyects = this.initListProyect(category);

    this.addCategory(category);
  }

  public onChangeOffset( offset: number ){
    this.pagination.offset = offset;

    this.listProyects = this.initListProyect(this.currentCategory);
  }

  public toggleProyects() {
    this.isProyectInProgress = !this.isProyectInProgress;
    if (this.isProyectInProgress)
      this.addCategory('inProgress');
    else
      this.addCategory('All');
  }

  private addCategory(category: CategoryWork) {
    this.router.navigate(['/'], {
      queryParams: { category },
      queryParamsHandling: 'merge' 
    });
  }

}