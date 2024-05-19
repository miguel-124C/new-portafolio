import { Component } from '@angular/core';
import { TitleHeader } from 'src/app/interfaces/titles-header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  private listTitlesHeader: TitleHeader[] = [
    { name: 'Services', href:'#service', icon:'' },
    { name: 'Works', href:'#portafolio', icon:'' },
    { name: 'About Me', href:'#about-me', icon:'' },
    { name: 'Skills', href:'#skills', icon:'' },
    { name: 'Contact', href:'#contact-me', icon:'' },
  ];

  public get getListTitlesHeader(): TitleHeader[]{
    return this.listTitlesHeader;
  }

}