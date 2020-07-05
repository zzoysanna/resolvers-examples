import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap, switchMap } from "rxjs/operators";
import { Course } from "../../models/course.model";
import { CoursesService } from "../../services/courses.service";
import { Author } from "../../models/author.model";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'amp-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
  providers: [DatePipe],
})
export class NewCourseComponent implements OnInit {

  public title: string;
  public description: string;
  public duration: number;
  public date: string;
  public authors: Author[];

  public course: Course;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) {
    this.createForm();
  }

  public ngOnInit() {
    this.route.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.courseService.getCourseById(params.get('id'))),
      tap(course => this.course = course),
    ).subscribe(
      () => this.createForm(this.course),
      err => console.error(JSON.stringify(err)),
    );

    this.course = this.route.snapshot.data.course;
    this.createForm(this.course)
  }

  public createForm(course?: Course): void {
    if(course) {
      const {title, description, duration, creationDate, authors} = course;
      this.title = title;
      this.description = description;
      this.duration = duration;
      this.date = this.datePipe.transform(creationDate, 'dd/MM/yyyy');
      this.authors = authors;
    }

    this.form = this.fb.group({
      'title': [this.title, [Validators.required, Validators.maxLength(50)]],
      'description': [this.description, [Validators.required, Validators.maxLength(500)]],
      'duration': [this.duration, Validators.required],
      'date': [this.date, [Validators.required, Validators.pattern('^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$')]],
      'authors': [this.authors, Validators.required],
    })
  }

  public sendData():void {
    const course: Course = {
      id: this.course ? this.course.id : '',
      title: this.form.value.title,
      description: this.form.value.description,
      creationDate: this.prepareDate(this.form.value.date),
      duration: this.form.value.duration,
      topRated: this.course ? this.course.topRated : false,
      authors: this.form.value.authors,
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

  public prepareDate(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    const date = new Date(Number(year), (Number(month) - 1), Number(day));
    return date.toISOString();
  }

  public onSubmit(): void {
    this.sendData();
    this.router.navigateByUrl('courses');
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }


}
