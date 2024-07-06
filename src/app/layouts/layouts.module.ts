import { NgModule } from '@angular/core';
import { HomeComponent } from './home-section/home-section.component';
import { AboutMeComponent } from './about-me-section/about-me-section.component';
import { PortafolioComponent } from './portafolio-section/portafolio-section.component';
import { SkillsComponent } from './skills-section/skills-section.component';
import { LayoutsComponent } from './layouts.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ServicesComponent } from './services-section/services-section.component';
import { ContacMeSectionComponent } from './contac-me-section/contac-me-section.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    ServicesComponent,
    AboutMeComponent,
    PortafolioComponent,
    SkillsComponent,
    ContacMeSectionComponent,
  ],
  imports: [
    SharedModule,
    PrimengModule,
    CommonModule,
  ],
  exports: [
    LayoutsComponent,
  ],
})
export class LayoutsModule { }
