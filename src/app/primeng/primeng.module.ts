import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    ImageModule,
    GalleriaModule,
  ]
})
export class PrimengModule { }
