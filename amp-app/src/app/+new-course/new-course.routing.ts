import {RouterModule, Routes} from "@angular/router";
import {NewCourseComponent} from "./new-course/new-course.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: NewCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCourseRoutingModule {
}
