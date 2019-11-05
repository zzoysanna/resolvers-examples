import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

const COURSE = {
  id: '111',
  title: 'test',
  creationDate: '1 Jan',
  duration: 10,
  description: 'test test',
};

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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

  it('should load more', () => {
    spyOn(component, 'onLoadMore').and.callThrough();
    const loadMoreBtn = debugElement.query(By.css('button'));
    loadMoreBtn.triggerEventHandler('click', null);
    expect(component.onLoadMore).toHaveBeenCalled();
  });

  it('should delete course', () => {
    spyOn(component, 'onDeleteCourse').and.callThrough();
    const firstCourse = debugElement.query(By.css('amp-course'));
    firstCourse.triggerEventHandler('delete', COURSE.id);
    expect(component.onDeleteCourse).toHaveBeenCalled();
  })
});
