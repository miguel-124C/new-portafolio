import { Injectable, OnInit, computed, effect, signal } from '@angular/core';

type DirectionAnimation = 'IZQUIERDA' | 'DERECHA';

@Injectable({providedIn: 'root'})
export class IndexDirectionService {
  
  private historyIndex = [-1];

  public currentIndex = signal<number>(0);
  public formerIndex  = computed<number>(()=>{
    const former = this.historyIndex[this.historyIndex.length - 1];
    this.historyIndex.push( this.currentIndex() );

    return former;
  });

  public direction   = computed<DirectionAnimation>(()=>{
    return (this.currentIndex() > this.formerIndex()) ? 'DERECHA' : 'IZQUIERDA';
  });
  
  private getAnimationString(){
    
  }

}