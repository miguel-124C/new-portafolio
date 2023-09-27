import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-page/home.component';
import { PageRoutingModule } from './page-routing.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PageComponent } from './page.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,    
    AboutMeComponent,
    SkillsComponent,
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    PrimengModule,
    ComponentsModule
  ]
})
export class PageModule { }
