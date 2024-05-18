import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';
import { CardsComponent } from './cards/cards.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SlierRangeComponent } from './slider-range/slier-range.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
    ChipsComponent,
    CardsComponent,
    CarrouselComponent,
    SlierRangeComponent,
    GaleriaComponent,
    FooterComponent,
  ],
  exports: [
    ChipsComponent,
    CardsComponent,
    CarrouselComponent,
    SlierRangeComponent,
    GaleriaComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ComponentsModule { }
