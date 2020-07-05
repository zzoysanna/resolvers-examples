import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoComponent } from "./logo/logo.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { LoginComponent } from "./login/login.component";
import { LogoffComponent } from "./logoff/logoff.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LogoComponent,
  BreadcrumbsComponent,
  LoginComponent,
  LogoffComponent,
  LoginFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [...COMPONENTS]
})
export class CoreModule { }
