import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuthorized: boolean;
  public userName: string;

  constructor() { }

  public ngOnInit() {
  }

}
