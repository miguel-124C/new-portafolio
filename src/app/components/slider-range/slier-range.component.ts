import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'c-slider-range',
  templateUrl: './slier-range.component.html',
  styleUrls: ['./slier-range.component.scss']
})
export class SlierRangeComponent implements AfterViewInit {

  @Input()
  public skill!: Skill;

  @ViewChild('percent')
  public percentElement!: ElementRef<HTMLDivElement>;

  public keyFrames: Keyframe[] = [
    { width: '0%', offset: 0 }
  ];

  public options: KeyframeAnimationOptions = {
    duration: 600,
    direction: 'normal',
    fill: 'forwards',
  }

  constructor(){}

  ngAfterViewInit(): void {
    this.showPercent();
  }

  showPercent(){
    const { percent } = this.skill;
    this.keyFrames = [
      { width: '0%', offset: 0 },
      { width: `${percent}%` }
    ];

    this.percentElement.nativeElement.animate(this.keyFrames, this.options);
  }

}
