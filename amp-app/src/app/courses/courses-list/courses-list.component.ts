import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import {COURSES} from "../shared/courses-mock";

@Component({
  selector: 'amp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: Course[];

  constructor() { }

  public ngOnInit() {
    this.courses = COURSES;
  }

  public onLoadMore(): void {
    console.log('load more');
  }

  public onDeleteCourse(id: string): void {
    console.log('delete course ' + id);
  }

}
