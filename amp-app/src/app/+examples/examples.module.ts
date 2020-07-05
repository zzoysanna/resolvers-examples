import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ExamplesRoutingModule } from "./examples.routing";
import { ExampleOneComponent } from './example1/example-one.component';
import { ExampleTwoComponent } from './example2/example-two.component';
import { SharedModule } from "../shared/shared.module";
import { ExampleThreeComponent } from './example3/example-three.component';
import { ExampleFourComponent } from './example4/example-four.component';
import { CourseResolver } from "./resolvers/course.resolver";
import { AllCoursesResolver } from "./resolvers/all-courses.resolver";
import { ErrorResolver } from "./resolvers/error.resolver";
import { ExampleFiveComponent } from "./example5/example-five.component";
import { ExampleSixComponent } from "./example6/example-six.component";
import { AuthorsComponent } from './example5/authors/authors.component';
import { DescriptionComponent } from './example5/description/description.component';

@NgModule({
  declarations: [
    ExamplesListComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ExampleFourComponent,
    ExampleFiveComponent,
    ExampleSixComponent,
    AuthorsComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExamplesRoutingModule,
  ],
  providers: [
    CourseResolver,
    AllCoursesResolver,
    ErrorResolver,
  ]
})
export class ExamplesModule { }
