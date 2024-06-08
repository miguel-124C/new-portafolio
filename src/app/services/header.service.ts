import { Injectable, OnDestroy, computed, signal } from '@angular/core';
import { Subscription, fromEvent, map } from 'rxjs';

type DirectionAnimation = 'IZQUIERDA' | 'DERECHA';

interface ParamAnimation {
  animation: string;
  current: number,
  former: number,
}

@Injectable({providedIn: 'root'})
export class HeaderService implements OnDestroy {
  
  private historyIndex = [-1];
  public canClick = signal(false);

  public onResize!: Subscription;

  constructor(){
    this.canClick.set( window.innerWidth <= 770 );

    this.onResize = fromEvent<Event>( window, 'resize')
    .subscribe(()=>{
      this.canClick.set( window.innerWidth <= 770 );
    });
  }

  ngOnDestroy(): void {
    this.onResize.unsubscribe();
  }

  public currentIndex = signal<number>(0);
  public formerIndex  = computed<number>(()=>{
    const former = this.historyIndex[this.historyIndex.length - 1];
    this.historyIndex.push( this.currentIndex() );

    return former;
  });

  public direction   = computed<DirectionAnimation>(()=>{
    return (this.currentIndex() > this.formerIndex()) ? 'DERECHA' : 'IZQUIERDA';
  });

}