import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'amp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input()
  public email: string;

  @Input()
  public password: string;

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit() {
  }

  public login(): void {
    if(this.email && this.password) {
      this.authService.login(this.email, this.password);
    }
  }

}
