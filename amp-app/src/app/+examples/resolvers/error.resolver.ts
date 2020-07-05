import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, delay, map, tap } from "rxjs/operators";
import { Course } from "../../models/course.model";
import { CoursesService } from "../../services/courses.service";

@Injectable()
export class ErrorResolver implements Resolve<Course[]> {
  constructor(
    private coursesService: CoursesService,
  ) {
  }

  public resolve(): Observable<Course[]> {
    return this.coursesService.getCoursesAll().pipe(
      map(() => {
        throw new Error('Something wrong here');
      }),
      catchError(() => {
        alert('user, we are sorry :(');
        return throwError('developer, fix it!!!');
      }),
    );
  }
}
