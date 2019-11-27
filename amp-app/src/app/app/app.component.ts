import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";

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
  ) {
  }

  public ngOnInit() {
    this.authService.checkLogin();
    this.authService.isAuthenticated().subscribe(
      auth => this.isAuthorized = auth,
      error => console.error(error),
    )
  }

}
