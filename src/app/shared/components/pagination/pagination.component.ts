import { Component, EventEmitter, Input,
  OnChanges, Output, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  
  @Input({required: true}) count: number = 0;
  @Input() limit: number = 10;
  @Output() onChangeOffset: EventEmitter<number> = new EventEmitter();
  
  public offset = signal(0);
  public numbers: number[] = [];
  public totalPagination = 0;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.numbers = [];
    this.totalPagination = Math.ceil(this.count / this.limit);
    for (let i = 0; i < this.totalPagination; i++) {
      this.numbers.push(i);
    }
  }
  
  public changeOffset( n : number) {
    const offset = this.offset() + n;
    if ( offset < 0 || offset > this.numbers[this.numbers.length - 1] ) return
    
    this.offset.update( offset => offset + n );
    this.onChangeOffset.emit(this.offset());
  }
  
  setOffset( newOffset: number ) {
    this.offset.set( newOffset );
    this.onChangeOffset.emit(this.offset());
  }
}