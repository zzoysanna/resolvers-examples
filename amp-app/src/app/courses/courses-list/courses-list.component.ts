import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'amp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: Course[];

  constructor() { }

  public ngOnInit() {
    this.courses = [
      {
        id: '111',
        title: 'test 1',
        creationDate: '1',
        duration: 10,
        description: 'test course 1',
      },
      {
        id: '112',
        title: 'test 2',
        creationDate: '1',
        duration: 10,
        description: 'test course 2',
      },
      {
        id: '113',
        title: 'test 3',
        creationDate: '1',
        duration: 10,
        description: 'test course 3',
      }
    ];
  }

}
