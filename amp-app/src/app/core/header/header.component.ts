import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { filter, switchMap, tap } from 'rxjs/operators';

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
    this.authService.isAuthenticated().pipe(
      tap(auth => this.isAuthorized = auth),
      filter(auth => !!auth),
      switchMap(() => this.authService.getCurrentUser()),
    ).subscribe(
      user => {
        if(user) {
          const {first, last} = user.name;
          this.userName = first + ' ' + last;
        }
      }
    );
  }

  public logout():void {
    this.authService.logout();
  }

}
