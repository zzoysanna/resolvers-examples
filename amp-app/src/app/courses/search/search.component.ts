import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'amp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  public query: string;

  @Output()
  public search = new EventEmitter<string>();

  @Output()
  public clear = new EventEmitter<boolean>();

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


}
