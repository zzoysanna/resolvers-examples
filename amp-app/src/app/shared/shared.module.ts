import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration-pipe/duration.pipe';
import { ErrorsPipe } from './errors/errors.pipe';


@NgModule({
  declarations: [
    DurationPipe,
    ErrorsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    ErrorsPipe,
  ]
})
export class SharedModule { }
