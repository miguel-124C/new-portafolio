import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path:'sections',
        loadChildren: ()=> import('./pages/sections/sections.module').then(m => m.SectionsModule)
    },{
        path:'**',
        redirectTo:'',
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
