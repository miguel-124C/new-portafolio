import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { PrimengModule } from '../primeng/primeng.module';
import { PortafolioRoutingModule } from './portafolio-routing.module';
import { SkillsComponent } from './pages/skills/skills.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    PortafolioComponent,
    SkillsComponent,
  ],exports: [
    AboutMeComponent,
    PortafolioComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
