import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { OrderByPipe } from "../order-by-pipe/order-by.pipe";
import { MatDialog, MatDialogModule } from "@angular/material";
import { Overlay } from "@angular/cdk/overlay";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

const COURSE = {
  id: '111',
  title: 'test',
  creationDate: '1 Jan',
  duration: 10,
  description: 'test test',
  topRated: true,
  authors: [],
};

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, OrderByPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ Overlay ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = [COURSE];
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should load more', () => {
    spyOn(component, 'onLoadMore').and.callThrough();
    const loadMoreBtn = debugElement.query(By.css('button'));
    loadMoreBtn.triggerEventHandler('click', null);
    expect(component.onLoadMore).toHaveBeenCalled();
  });

  xit('should delete course', () => {
    spyOn(component, 'onDeleteCourse').and.callThrough();
    const firstCourse = debugElement.query(By.css('amp-course'));
    firstCourse.triggerEventHandler('delete', COURSE.id);
    expect(component.onDeleteCourse).toHaveBeenCalled();
  })
});
