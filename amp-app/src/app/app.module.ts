import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app/app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedModule,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
