import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { CoursesService } from "../../services/courses.service";
import { Course } from 'src/app/models/course.model';
import { finalize } from "rxjs/operators";

@Injectable()
export class AllCoursesResolver implements Resolve<Course[]> {
  constructor(
    private coursesService: CoursesService,
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Course[]> {
    console.log('all courses resolver started');
    return this.coursesService.getCoursesAll().pipe(
      finalize(() => console.log('all courses resolver stopped'))
    );
  }
}
