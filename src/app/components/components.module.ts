import { NgModule } from '@angular/core';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BarNavResponsiveComponent } from './bar-nav-responsive/bar-nav-responsive.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';
import { CardsComponent } from './cards/cards.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SlierRangeComponent } from './slider-range/slier-range.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
    declarations: [
    BarNavComponent,
    BarNavResponsiveComponent,
    ChipsComponent,
    CardsComponent,
    CarrouselComponent,
    SlierRangeComponent,
    GaleriaComponent,
  ],
  exports: [
    BarNavComponent,
    BarNavResponsiveComponent,
    ChipsComponent,
    CardsComponent,
    CarrouselComponent,
    SlierRangeComponent,
    GaleriaComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ComponentsModule { }
