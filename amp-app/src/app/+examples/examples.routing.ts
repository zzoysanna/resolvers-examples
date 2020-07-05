import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ExamplesListComponent } from "./examples-list/examples-list.component";
import { ExampleOneComponent } from "./example1/example-one.component";
import { ExampleTwoComponent } from "./example2/example-two.component";
import { CourseResolver } from "./resolvers/course.resolver";
import { ExampleThreeComponent } from "./example3/example-three.component";
import { AllCoursesResolver } from "./resolvers/all-courses.resolver";
import { RootGuard } from './guards/root.guard';
import { ExampleFiveComponent } from "./example5/example-five.component";
import { ExampleSixComponent } from "./example6/example-six.component";
import { ErrorResolver } from "./resolvers/error.resolver";
import { AuthorsComponent } from "./example5/authors/authors.component";
import { DescriptionComponent } from "./example5/description/description.component";
import { ExampleFourComponent } from './example4/example-four.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesListComponent,
  },
  {
    path: 'data-from-service',
    component: ExampleOneComponent,
  },
  {
    path: 'data-from-resolver',
    component: ExampleTwoComponent,
    resolve: {
      course: CourseResolver
    }
  },
  {
    path: 'some-resolvers',
    component: ExampleThreeComponent,
    resolve: {
      course: CourseResolver,
      coursesList: AllCoursesResolver,
    }
  },
  {
    path: 'guards-resolver',
    component: ExampleFourComponent,
    canActivate: [
      RootGuard,
    ],
    resolve: {
      course: CourseResolver
    }
  },
  {
    path: 'children',
    component: ExampleFiveComponent,
    resolve: {
      course: CourseResolver
    },
    children: [
      {
        path: 'authors',
        component: AuthorsComponent,
      },
      {
        path: 'description',
        component: DescriptionComponent,
      }
    ]
  },
  {
    path: 'errors',
    component: ExampleSixComponent,
    resolve: {
      coursesList: ErrorResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {
}
