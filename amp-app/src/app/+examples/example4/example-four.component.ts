import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.scss']
})
export class ExampleFourComponent implements OnInit {

  public course: Course;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.course = this.route.snapshot.data.course;
  }

}
