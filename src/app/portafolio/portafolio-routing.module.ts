import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
    {
        path:'portafolio',
        component: PortafolioComponent
    },{
        path:'skills',
        component: SkillsComponent
    },{
        path:'about-me',
        component: AboutMeComponent
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
