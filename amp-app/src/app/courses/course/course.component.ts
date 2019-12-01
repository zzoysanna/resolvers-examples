import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from "../../models/course.model";

@Component({
  selector: 'amp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {

  @Output()
  public delete = new EventEmitter<string>();

  @Output()
  public edit = new EventEmitter<string>();

  @Input()
  public course: Course;

  constructor() {
  }

  public ngOnInit() {
  }

  public onEdit(): void {
    this.edit.emit(this.course.id);
  }

  public onDelete(): void {
    this.delete.emit(this.course.id);
  }

}
