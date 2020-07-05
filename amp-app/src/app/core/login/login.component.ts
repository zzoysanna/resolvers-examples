import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  public login: string;

  constructor() { }

  public ngOnInit() {
  }

}
