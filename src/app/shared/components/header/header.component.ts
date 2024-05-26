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
export class HeaderComponent implements OnInit{

  public hrefGmail = '';
  public gmail = UrlPersonals.gmail;
  
  private indexDirectionService = inject( IndexDirectionService );
  
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

  // private animationByDirection( direction: DirectionAnimation ){

  // }

  public addAnimation = effect(()=>{
    const list = document.querySelectorAll<HTMLElement>('.header-li');
    console.log(this.indexDirectionService.direction(), list)

    list.forEach( (li, index) =>{
      if ( index == this.indexDirectionService.currentIndex()) {
        li.lastElementChild!.classList.add('active');
        console.log(li.textContent)
      }else{
        li.lastElementChild!.classList.remove('active');
      }
    });
  });

}