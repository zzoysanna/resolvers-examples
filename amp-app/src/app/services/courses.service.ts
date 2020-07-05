import { Injectable } from '@angular/core';
import { Course } from "../models/course.model";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { delay, finalize, tap } from "rxjs/operators";
import { LoaderService } from "./loader.service";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesStream = new BehaviorSubject<Course[]>(null);

  constructor(
    private http: HttpClient,
    private loading: LoaderService,
  ) { }

  get courses(): Course[] {
    return this.coursesStream.getValue();
  }

  public getCourses(): Observable<Course[]> {
    if(!this.coursesStream.getValue()) {
      return this.getCoursesPartial();
    }
    return this.coursesStream;
  }

  public getCoursesPartial(count: number = 5): Observable<Course[]> {
    const currentCourses = this.coursesStream.getValue();
    const start = currentCourses ? currentCourses.length : 0;
    this.http.get<Course[]>(`${environment.rest}/courses?start=${start}&count=${count}`).subscribe(
      courses => {
        if(currentCourses) {
          currentCourses.push(...courses);
          this.coursesStream.next(currentCourses);
        } else {
          this.coursesStream.next(courses);
        }
      }
    );
    return this.coursesStream;
  }

  public getCoursesAll(): Observable<Course[]> {
    this.loading.start();
    return this.http.get<Course[]>(`${environment.rest}/courses`).pipe(
      delay(1000),
      finalize(() => this.loading.stop())
    );
  }

  public search(query: string): Observable<Course[]> {
    this.http.get<Course[]>(`${environment.rest}/courses?textFragment=${query}`).subscribe(
      courses => {
        this.coursesStream.next(courses);
      }
    );
    return this.coursesStream;
  }

  public createCourse(course: Course): void {
    this.http.post<Course>(`${environment.rest}/courses`, course).pipe(
      tap(() => this.coursesStream.next(null)),
    ).subscribe(
      () => this.getCourses(),
      error => console.error(error),
    );
  }

  public getCourseById(id: string): Observable<Course> {
    this.loading.start();
    return this.http.get<Course>(`${environment.rest}/courses/${id}`).pipe(
      delay(2000),
      finalize(() => this.loading.stop())
    );
  }

  public updateCourse(course: Course): void {
    this.http.patch<Course>(`${environment.rest}/courses`, course).pipe(
      tap(() => this.coursesStream.next(null)),
    ).subscribe(
      () => this.getCourses(),
      error => console.error(error),
    );
  }

  public removeItem(id: string): Subscription {
    return this.http.delete(`${environment.rest}/courses/${id}`).pipe(
      tap(() => this.coursesStream.next(null)),
    ).subscribe(
      () => this.getCourses(),
      error => console.error(error),
    );
  }

  public onClearSearch(): void {
    this.coursesStream.next(null);
    this.getCourses();
  }
}
