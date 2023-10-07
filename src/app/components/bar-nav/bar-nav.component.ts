import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'c-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.scss']
})
export class BarNavComponent{

  @Input()
  public itemNavBar: MenuItem[] = [];

  constructor(){}

}
