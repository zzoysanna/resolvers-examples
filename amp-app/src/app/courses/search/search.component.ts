import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { fromEvent } from "rxjs";
import { debounceTime, filter } from "rxjs/operators";

@Component({
  selector: 'amp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input()
  public query: string;

  @Output()
  public search = new EventEmitter<string>();

  @Output()
  public clear = new EventEmitter<boolean>();

  @ViewChild('searchField', {static: false})
  public searchField: ElementRef;

  constructor() { }

  public ngOnInit() {
  }

  public onBtnClick(): void {
    if(this.query) {
      this.search.emit(this.query);
    }
  }

  public onClear(): void {
    this.query = '';
    this.clear.emit(true);
  }

  public ngAfterViewInit(): void {
    fromEvent(this.searchField.nativeElement, 'keyup').pipe(
      debounceTime(500),
      filter(() => this.query.length >= 3),
    ).subscribe(
      () => this.search.emit(this.query),
      error => console.error(error),
    )
  }


}
