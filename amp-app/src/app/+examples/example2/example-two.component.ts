import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {

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
