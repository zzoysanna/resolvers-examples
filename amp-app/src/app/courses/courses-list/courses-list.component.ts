import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { OrderByPipe } from "../order-by-pipe/order-by.pipe";
import { CoursesService } from "../services/courses.service";
import { MatDialog } from "@angular/material";
import { CourseDeleteDialogComponent } from "../course-delete-dialog/course-delete-dialog.component";

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
    private coursesService: CoursesService,
    public dialog: MatDialog,
  ) { }

  public ngOnInit() {
    this.coursesService.getCoursesList().subscribe(
      courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error => console.error(error),
    );
  }

  public onLoadMore(): void {
    console.log('load more');
  }

  public onDeleteCourse(id: string): void {
    let dialogRef = this.dialog.open(CourseDeleteDialogComponent, {
      data: {id},
    });
    dialogRef.afterClosed().subscribe(
      result => {
        if(result) {
          this.coursesService.removeItem(id);
        }
      }
    );
  }

  public onEditCourse(id: string): void {
    console.log('edit course ' + id);
  }

  public filterCourses(query: string): void {
    this.filteredCourses = this.orderPipe.transform(this.filteredCourses, 'title', query);
  }

  public clearFilter(): void {
    this.filteredCourses = this.courses;
  }

}
