import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-example-six',
  templateUrl: './example-six.component.html',
  styleUrls: ['./example-six.component.scss']
})
export class ExampleSixComponent implements OnInit {

  public course: Course;

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.course = this.route.snapshot.data.course;

    // this.route.data.subscribe(
    //   ({course}) => this.course = course,
    //   error => console.error(error),
    // )
  }

}
