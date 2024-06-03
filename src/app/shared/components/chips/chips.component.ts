import { Component, Input } from '@angular/core';
import { Redes } from 'src/app/interfaces';

@Component({
  selector: 'c-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  @Input()
  public chipsItem: Redes[] = [];

}
