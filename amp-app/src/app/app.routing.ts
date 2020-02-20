import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from "./courses/courses-list/courses-list.component";
// import { NewCourseComponent } from "./new-course/new-course/new-course.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/new',
    loadChildren: './+new-course#NewCourseModule',
    // component: NewCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'course/:id',
    loadChildren: './+new-course#NewCourseModule',
    // component: NewCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {
}
