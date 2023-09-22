import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  public dataPersonal = {
    name:'Miguel',
    edad:20,
    info:''
  }  
}
