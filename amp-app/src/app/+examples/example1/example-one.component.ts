import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../../services/courses.service";
import { environment } from "../../../environments/environment";
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent implements OnInit {

  public course: Course;

  constructor(
    private coursesService: CoursesService,
  ) { }

  public ngOnInit(): void {
    this.coursesService.getCourseById(environment.exampleId).subscribe(
      course => this.course = course,
      error => console.error(error),
    );
  }

}
