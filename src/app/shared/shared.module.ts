import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ChipsComponent } from './components/chips/chips.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HeaderComponent } from './components/header/header.component';
import { SlierRangeComponent } from './components/slider-range/slier-range.component';

@NgModule({
    declarations: [
        ChipsComponent,
        CardsComponent,
        CarrouselComponent,
        SlierRangeComponent,
        GaleriaComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ChipsComponent,
        CardsComponent,
        CarrouselComponent,
        SlierRangeComponent,
        GaleriaComponent,
        HeaderComponent,
        FooterComponent,
    ],
    providers: [],
})
export class SharedModule {}