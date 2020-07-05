import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'amp-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public isNew: boolean;
  public courseTitle: string;

  constructor(
    private router: Router,
    private courseService: CoursesService,
  ) { }

  public ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => this.courseTitle = ''),
      distinctUntilChanged(),
      tap(() => this.isNew = this.router.url.includes('/new')),
      filter(() => this.router.url.includes('course/')),
      switchMap(() => this.courseService.getCourseById(this.getCourseId())),
      map(course => course.title),
    ).subscribe(
      title => this.courseTitle = title,
      err => console.error(err),
    );
  }

  public getCourseId(): string {
    return this.router.url.split('/').splice(2)[0];
  }

}
