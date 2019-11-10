import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { COURSES } from "../shared/courses-mock";
import { OrderByPipe } from "../order-by-pipe/order-by.pipe";

@Component({
  selector: 'amp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [OrderByPipe],
})
export class CoursesListComponent implements OnInit {
  public courses: Course[];
  public filteredCourses: Course[];

  constructor(
    private orderPipe: OrderByPipe,
  ) { }

  public ngOnInit() {
    this.courses = COURSES;
    this.filteredCourses = this.courses;
  }

  public onLoadMore(): void {
    console.log('load more');
  }

  public onDeleteCourse(id: string): void {
    console.log('delete course ' + id);
  }

  public filterCourses(query: string): void {
    this.filteredCourses = this.orderPipe.transform(this.filteredCourses, 'title', query);
  }

  public clearFilter(): void {
    this.filteredCourses = this.courses;
  }

}
