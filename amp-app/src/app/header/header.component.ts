import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'amp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuthorized: boolean;
  public userName: string;

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit() {
    this.authService.checkLogin();
    this.authService.isAuthenticated().subscribe(
      auth => {
        this.isAuthorized = auth;
        if(auth) {
          this.userName = this.authService.getUserInfo();
        }
      }
    );
  }

  public logout():void {
    this.authService.logout();
  }

}
