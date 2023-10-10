import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'c-slider-range',
  templateUrl: './slier-range.component.html',
  styleUrls: ['./slier-range.component.scss']
})
export class SlierRangeComponent {

  @Input()
  public skills!: Skill[];

}
