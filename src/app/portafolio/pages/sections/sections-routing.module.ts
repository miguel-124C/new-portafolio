import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SkillsComponent } from './skills/skills.component';
import { SectionComponent } from './sections.component';

const routes: Routes = [
  {
    path:'',
    component: SectionComponent,
    children: [
      {
        path: 'about-me',
        component: AboutMeComponent
      },{
        path: 'portafolio',
        component: PortafolioComponent
      },{
        path: 'skills',
        component: SkillsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
