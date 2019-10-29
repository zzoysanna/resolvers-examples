import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'amp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  public query: string;

  constructor() { }

  public ngOnInit() {
  }

  public onBtnClick() {
    if(this.query) {
      console.log(this.query);
    }
  }


}
