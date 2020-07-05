import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: 'amp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, AfterViewInit {

  public loginForm: FormGroup;
  public isAuthFailed: boolean;

  @ViewChild('loginFormElem', {static: false})
  public loginFormElement: ElementRef;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }

  public ngOnInit() {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.authService.isAuthFailed.subscribe(
      isFailed => this.isAuthFailed = isFailed,
    );
  }

  public login(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public ngAfterViewInit(): void {
    fromEvent(this.loginFormElement.nativeElement, 'keyup').pipe(
      filter(() => this.isAuthFailed),
    ).subscribe(
      () => this.isAuthFailed = false,
    );
  }
}
