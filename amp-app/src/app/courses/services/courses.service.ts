import { Injectable } from '@angular/core';
import { Course } from "../shared/course.model";
import { COURSES } from "../shared/courses-mock";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesStream = new BehaviorSubject<Course[]>(null);

  constructor() { }

  get courses(): Course[] {
    return this.coursesStream.getValue();
  }

  public getCoursesList(): Observable<Course[]> {
    if(!this.coursesStream.getValue()) {
      this.coursesStream.next(COURSES);
    }
    return this.coursesStream;
  }

  public createCourse(course: Course): void {
    this.courses.push(course);
    this.coursesStream.next(this.courses);
  }

  public getCourseById(id: string): Course {
    return this.courses.find(course => course.id === id);
  }

  public updateCourse(course: Course): void {}

  public removeItem(id: string): void {
    this.coursesStream.next(this.courses.filter(course => course.id !== id));
  }
}
