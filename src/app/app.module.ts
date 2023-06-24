import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioModule } from './portafolio/portafolio.module';
import { PrimengModule } from './primeng/primeng.module';
import { SectionsComponent } from './components/sections/sections.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    PortafolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
