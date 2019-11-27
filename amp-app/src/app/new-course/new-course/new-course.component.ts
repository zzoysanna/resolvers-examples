import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'amp-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public description: string;

  @Input()
  public duration: string;

  @Input()
  public date: string;

  @Input()
  public authors: string;

  constructor() { }

  public ngOnInit() {
  }

  public save():void {
    console.log('save');
  }

  public cancel():void {
    console.log('cancel');
  }

}
