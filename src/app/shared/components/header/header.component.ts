import { Component, Input, OnInit, inject, computed, signal, AfterViewInit, effect } from '@angular/core';
import { UrlPersonals } from 'db/dataPersonal';
import { interval } from 'rxjs';
import { TitleHeader } from 'src/app/interfaces/titles-header.interface';
import { IndexDirectionService } from 'src/app/services/index-position.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit{
  private indexDirectionService = inject( IndexDirectionService );
  
  public list?: NodeListOf<HTMLElement>;
  public hrefGmail = '';
  public gmail = UrlPersonals.gmail;
  
  public current = computed(()=> this.indexDirectionService.currentIndex());
  public former  = computed(()=> this.indexDirectionService.formerIndex());
  public direction  = computed(()=> this.indexDirectionService.direction());
  
  ngOnInit(): void {
    this.hrefGmail = `mailto:${this.gmail}`;
  }
  
  ngAfterViewInit(): void {
    this.list = document.querySelectorAll<HTMLElement>('.header-li');
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