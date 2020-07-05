import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { LoaderService } from "../services/loader.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'amp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterContentChecked{

  public title = 'amp-spa';
  public isAuthorized: boolean;
  public isLoaderShown: boolean;

  private destroy = new Subject();

  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('ru-RU');
  }

  public ngOnInit() {
    this.authService.checkLogin();
    // this.authService.isAuthenticated().pipe(
    //   takeUntil(this.destroy),
    // ).subscribe(
    //   auth => {
    //       this.isAuthorized = auth;
    //       this.router.navigateByUrl(this.isAuthorized ? 'examples' : 'login')
    //     },
    //     error => console.error(error),
    // );
  }

  public ngAfterContentChecked(): void {
    this.loaderService.showLoader().pipe(
      takeUntil(this.destroy),
    ).subscribe(
      status => {
        if(status !== this.isLoaderShown) {
          this.isLoaderShown = status;
          this.cdr.detectChanges();
        }
      },
      error => console.error(error),
    )
  }

  public ngOnDestroy(): void {
    this.destroy.next();
  }

}
