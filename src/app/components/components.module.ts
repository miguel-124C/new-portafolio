import { NgModule } from '@angular/core';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BarNavResponsiveComponent } from './bar-nav-responsive/bar-nav-responsive.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';
import { CardsComponent } from './cards/cards.component';
import { CardsImgComponent } from './cards-img/cards-img.component';

@NgModule({
    declarations: [
    BarNavComponent,
    BarNavResponsiveComponent,
    ChipsComponent,
    CardsComponent,
    CardsImgComponent
  ],
  exports: [
    BarNavComponent,
    BarNavResponsiveComponent,
    ChipsComponent,
    CardsComponent,
    CardsImgComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ComponentsModule { }
