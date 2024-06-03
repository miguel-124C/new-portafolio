import { Component, OnInit, inject, computed, AfterViewInit, } from '@angular/core';
import { GMAIL, UrlPersonals } from 'db/dataPersonal';
import { TitleHeader } from 'src/app/interfaces';
import { IndexDirectionService } from 'src/app/services';

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
    { name: 'About Me', href:'#about-me', },
    { name: 'Skills', href:'#skills', },
    { name: 'Works', href:'#portafolio', },
    { name: 'Contact', href:'#contact-me', },
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