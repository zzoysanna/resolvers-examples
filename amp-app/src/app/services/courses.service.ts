import { Injectable } from '@angular/core';
import { Course } from "../models/course.model";
import { COURSES } from "../models/courses-mock";
import {BehaviorSubject, Observable, of} from "rxjs";

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
    course.id = this.createNewId();
    this.courses.push(course);
    this.coursesStream.next(this.courses);
  }

  private createNewId(): string {
    const maxId = Math.max.apply(Math, this.courses.map(course => course.id));
    return (Number(maxId) + 1).toString();
  }

  public getCourseById(id: string): Observable<Course> {
    const course = this.courses.find(course => course.id === id);
    return of(course);
  }

  public updateCourse(newCourse: Course): void {
    this.courses.forEach((course,i) => {
      if(course.id === newCourse.id) {
        this.courses[i] = newCourse;
      }
    });
    this.coursesStream.next(this.courses);
  }

  public removeItem(id: string): void {
    this.coursesStream.next(this.courses.filter(course => course.id !== id));
  }
}
