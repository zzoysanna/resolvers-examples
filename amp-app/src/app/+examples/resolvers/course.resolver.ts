import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import { CoursesService } from "../../services/courses.service";
import { Course } from "../../models/course.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { finalize } from 'rxjs/internal/operators/finalize';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(
    private coursesService: CoursesService,
  ){}

  public resolve(): Observable<Course>{
    console.log('course resolver started');
    return this.coursesService.getCourseById(environment.exampleId).pipe(
      finalize(() => console.log('course resolver stopped'))
    );
  }
}


