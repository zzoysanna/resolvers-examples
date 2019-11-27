import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { DateBorderDirective } from './date-border/date-border.directive';
import { MatDialogModule, MatIconModule } from "@angular/material";
import { OrderByPipe } from './order-by-pipe/order-by.pipe';
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { CourseDeleteDialogComponent } from './course-delete-dialog/course-delete-dialog.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    CourseComponent,
    CoursesListComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    AddCourseComponent,
    SearchComponent,
    DateBorderDirective,
    OrderByPipe,
    CourseDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    SharedModule,
  ],
  entryComponents: [
    CourseDeleteDialogComponent,
  ]
})
export class CoursesModule { }
