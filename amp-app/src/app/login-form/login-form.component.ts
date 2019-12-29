import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'amp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }

  public ngOnInit() {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  public login(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.invalid && control.touched;
  }

}
