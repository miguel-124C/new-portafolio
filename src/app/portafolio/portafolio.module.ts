import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { PortafolioRoutingModule } from './portafolio-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home-page/home.component';
import { SectionsComponent } from '../components/sections/sections.component';
import { AboutMeComponent } from './pages/sections/about-me/about-me.component';
import { PortafolioComponent } from './pages/sections/portafolio/portafolio.component';
import { SkillsComponent } from './pages/sections/skills/skills.component';



@NgModule({
  declarations: [
    SectionsComponent,
    AboutMeComponent,
    PortafolioComponent,
    SkillsComponent,
    HomeComponent,
  ],exports: [
    AboutMeComponent,
    PortafolioComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    PortafolioRoutingModule,
    FormsModule
  ]
})
export class PortafolioModule { }
