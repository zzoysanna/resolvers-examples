import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'amp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'amp-spa';
  public isAuthorized: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  public ngOnInit() {
    this.authService.checkLogin();
    this.authService.isAuthenticated().subscribe(
      auth => {
          this.isAuthorized = auth;
          if(!this.isAuthorized){
            this.router.navigateByUrl('login');
          }
        },
        error => console.error(error),
    )
  }

}
