import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseComponent } from './new-course/new-course.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [NewCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class NewCourseModule { }
