import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'amp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  public course: Course;

  constructor() {
  }

  public ngOnInit() {
  }

}
