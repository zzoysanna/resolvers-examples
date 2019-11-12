import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { DateBorderDirective } from './date-border/date-border.directive';
import { MatIconModule } from "@angular/material";
import { DurationPipe } from './duration-pipe/duration.pipe';
import { OrderByPipe } from './order-by-pipe/order-by.pipe';
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CourseComponent,
    CoursesListComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    AddCourseComponent,
    SearchComponent,
    DateBorderDirective,
    DurationPipe,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
  ],
})
export class CoursesModule { }
