import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { SliderModule } from 'primeng/slider';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    ImageModule,
    GalleriaModule,
    TimelineModule,
    DividerModule,
    ChipModule,
    PanelModule,
    SliderModule,
    CarouselModule,
  ]
})
export class PrimengModule { }
