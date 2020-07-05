import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-example-five',
  templateUrl: './example-five.component.html',
  styleUrls: ['./example-five.component.scss']
})
export class ExampleFiveComponent implements OnInit {

  public course: Course;

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.course = this.route.snapshot.data.course;
  }

}
