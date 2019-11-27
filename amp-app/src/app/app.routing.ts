import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from "./courses/courses-list/courses-list.component";
import { NewCourseComponent } from "./new-course/new-course/new-course.component";

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'new',
    component: NewCourseComponent,
  },
  {
    path: '**',
    redirectTo: 'courses',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {
}
