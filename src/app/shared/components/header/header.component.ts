import { Component, OnInit } from '@angular/core';
import { UrlPersonals } from 'db/dataPersonal';
import { TitleHeader } from 'src/app/interfaces/titles-header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  public hrefGmail = '';
  public gmail = UrlPersonals.gmail;
  
  ngOnInit(): void {
    this.hrefGmail = `mailto:${this.gmail}`;
  }

  private listTitlesHeader: TitleHeader[] = [
    { name: 'About Me', href:'#about-me', icon:'' },
    { name: 'Skills', href:'#skills', icon:'' },
    { name: 'Works', href:'#portafolio', icon:'' },
    { name: 'Contact', href:'#contact-me', icon:'' },
  ];

  public get getListTitlesHeader(): TitleHeader[]{
    return this.listTitlesHeader;
  }

}