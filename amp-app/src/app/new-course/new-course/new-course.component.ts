import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from "rxjs/operators";
import { CoursesService } from "../../services/courses.service";
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public description: string;

  @Input()
  public duration: number;

  @Input()
  public date: string;

  @Input()
  public authors: string;

  public course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
  ) { }

  public ngOnInit() {
    this.route.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.courseService.getCourseById(params.get('id'))),
      tap(course => this.course = course),
    ).subscribe(
      ({title, description, duration, creationDate}) => {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.date = creationDate;
      },
      err => console.error(JSON.stringify(err)),
    );
  }

  public save():void {
    const course: Course = {
      id: this.course ? this.course.id : '',
      title: this.title,
      description: this.description,
      creationDate: this.date,
      duration: this.duration,
      topRated: this.course ? this.course.topRated : false,
    };

    if(course.id) {
      this.courseService.updateCourse(course);
    } else {
      this.courseService.createCourse(course);
    }

    this.router.navigateByUrl('courses');
  }

  public cancel():void {
    this.router.navigateByUrl('courses');
  }


}
