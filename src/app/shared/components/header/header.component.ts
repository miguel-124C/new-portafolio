import { Component, Input, OnInit, inject, computed, signal, AfterViewInit, effect } from '@angular/core';
import { GMAIL, UrlPersonals } from 'db/dataPersonal';
import { fromEvent, interval } from 'rxjs';
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
  public gmail = GMAIL;
  
  public current = computed(()=> this.indexDirectionService.currentIndex());
  public former  = computed(()=> this.indexDirectionService.formerIndex());
  public direction  = computed(()=> this.indexDirectionService.direction());

  public headerIsOpen: boolean = false;
  
  ngOnInit(): void {
    this.hrefGmail = UrlPersonals.gmail;
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

  openCloseHeader( elementOpen: HTMLElement, elementClose: HTMLElement, elementHeader: HTMLElement ){
    this.headerIsOpen = !this.headerIsOpen;

    if (this.headerIsOpen) {
      elementClose.classList.remove('hiddenIcon');
      elementClose.classList.add('showIcon');

      elementOpen.classList.remove('showIcon');
      elementOpen.classList.add('hiddenIcon');

      elementHeader.classList.remove('hiddenHeader');
      elementHeader.classList.add('showHeader');
    }else{
      elementOpen.classList.remove('hiddenIcon');
      elementOpen.classList.add('showIcon');

      elementClose.classList.remove('showIcon');
      elementClose.classList.add('hiddenIcon');

      elementHeader.classList.remove('showHeader');
      elementHeader.classList.add('hiddenHeader');
    }

  }

}