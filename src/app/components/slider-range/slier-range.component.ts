import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'c-slider-range',
  templateUrl: './slier-range.component.html',
  styleUrls: ['./slier-range.component.scss']
})
export class SlierRangeComponent implements OnInit {

  @Input()
  public percent: number = 0;

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

  ngOnInit(): void {
    this.showPercent();
  }

  constructor(){}

  showPercent(){
    this.keyFrames = [
      { width: '0%', offset: 0 },
      { width: `${this.percent}%` }
    ];

    setTimeout(()=>{
      this.percentElement.nativeElement.animate(this.keyFrames, this.options);
    }, 10);
  }

}
