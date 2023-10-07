import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'c-bar-nav-responsive',
  templateUrl: './bar-nav-responsive.component.html',
  styleUrls: ['./bar-nav-responsive.component.scss']
})
export class BarNavResponsiveComponent {

  public banderaNavBar: boolean = false;

  @Output()
  public onShowNavBar: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public itemNavBar: MenuItem[] = [];

  showNavBar(){
    this.banderaNavBar = !this.banderaNavBar;
    this.onShowNavBar.emit(this.banderaNavBar);
  }

}
