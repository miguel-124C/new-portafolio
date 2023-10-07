import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BarNavResponsiveComponent } from './bar-nav-responsive/bar-nav-responsive.component';

@NgModule({
    declarations: [
    BarNavComponent,
    BarNavResponsiveComponent
  ],
  exports: [
    BarNavComponent,
    BarNavResponsiveComponent
  ],
  imports: [
    PrimengModule
  ]
})
export class ComponentsModule { }
