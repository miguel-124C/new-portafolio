import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './pages/main/main.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SectionsComponent } from '../components/sections/sections.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    MainComponent,
    SectionsComponent,
  ],exports:[
    MainComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ]
})
export class PortafolioModule { }
