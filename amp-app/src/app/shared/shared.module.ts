import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
