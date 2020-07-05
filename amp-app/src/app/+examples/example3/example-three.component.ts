import { Component, OnInit } from '@angular/core';
import { Course } from "../../models/course.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'amp-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.scss']
})
export class ExampleThreeComponent implements OnInit {

  public course: Course;
  public list: Course[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.course = this.route.snapshot.data.course;
    this.list = this.route.snapshot.data.coursesList;
  }

}
