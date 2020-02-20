import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseComponent } from './new-course/new-course.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DateFieldComponent } from './date-field/date-field.component';
import { TimeFieldComponent } from './time-field/time-field.component';
import { AuthorsFieldComponent } from './authors-field/authors-field.component';
import { MatIconModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NumberDirective } from './number-validator/number.directive';
import { NewCourseRoutingModule } from "./new-course.routing";


@NgModule({
  declarations: [
    NewCourseComponent,
    DateFieldComponent,
    TimeFieldComponent,
    AuthorsFieldComponent,
    NumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    TextMaskModule,
    NewCourseRoutingModule,
  ]
})
export class NewCourseModule { }
