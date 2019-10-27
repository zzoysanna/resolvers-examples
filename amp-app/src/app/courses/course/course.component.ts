import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../shared/course.model";

@Component({
  selector: 'amp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Output()
  public delete = new EventEmitter<string>();

  @Input()
  public course: Course;

  constructor() {
  }

  public ngOnInit() {
  }

  public onEdit(): void {
    console.log('edit');
  }

  public onDelete(): void {
    this.delete.next(this.course.id);
  }

}
