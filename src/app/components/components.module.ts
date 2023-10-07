import { NgModule } from '@angular/core';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BarNavResponsiveComponent } from './bar-nav-responsive/bar-nav-responsive.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
    declarations: [
    BarNavComponent,
    BarNavResponsiveComponent,
    ChipsComponent
  ],
  exports: [
    BarNavComponent,
    BarNavResponsiveComponent,
    ChipsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ComponentsModule { }
