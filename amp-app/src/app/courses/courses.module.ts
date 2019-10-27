import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";


@NgModule({
  declarations: [
    CourseComponent,
    CoursesListComponent,
    EditButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CoursesModule { }
