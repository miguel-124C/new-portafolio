import { Component, inject, computed, AfterViewInit, Input, } from '@angular/core';
import { GMAIL, UrlPersonals } from 'db/dataPersonal';
import { TitleHeader } from 'src/app/interfaces';
import { HeaderService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit{

  private headerService = inject( HeaderService );
  
  public list?: NodeListOf<HTMLElement>;
  public hrefGmail = '';
  public gmail = GMAIL;
  @Input({required: true}) isInHome = false;
  
  public current = computed(()=> this.headerService.currentIndex());
  public former  = computed(()=> this.headerService.formerIndex());
  public direction  = computed(()=> this.headerService.direction());

  public headerIsOpen: boolean = false;
  public canClick = computed(()=> this.headerService.canClick());
  
  constructor(){
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
    this.setOverflowHidden();
    
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

  setOverflowHidden(){
    const body = document.body;
    body.style.overflow = this.headerIsOpen ? 'hidden' : 'auto';
  }

}