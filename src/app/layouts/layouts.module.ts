import { NgModule } from '@angular/core';
import { HomeComponent } from './home-page/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    PortafolioComponent,
    SkillsComponent,
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    HomeComponent,
  ],
})
export class LayoutsModule { }
