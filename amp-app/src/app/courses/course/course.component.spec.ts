import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

const COURSE = {
  id: '111',
  title: 'test',
  creationDate: '1 Jan',
  duration: 10,
  description: 'test test',
};

@Component({
  template: `<amp-course [course]="course" (delete)="onDeleteCourse($event)"></amp-course>`
})
class TestHostComponent {
  public course = COURSE;
  public onDeleteCourse(id: string) {
    console.log(id)
  };
}

describe('CourseComponent', () => {
  let component: TestHostComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input', () => {
    expect(component.course).toEqual(COURSE);
  });

  it('should have output', () => {
    const deleteSpy = spyOn(component, 'onDeleteCourse');
    const deleteBtn = fixture.debugElement.query(By.css('amp-delete-button'));
    deleteBtn.triggerEventHandler('click', null);
    expect(deleteSpy).toHaveBeenCalledWith(COURSE.id);
  });

  it('should call edit method', () => {
    const courseFixture =  TestBed.createComponent(CourseComponent);
    const course = courseFixture.componentInstance;
    spyOn(courseFixture.componentInstance, 'onEdit').and.callThrough();

    const editBtn = courseFixture.debugElement.query(By.css('amp-edit-button'));
    editBtn.triggerEventHandler('click', null);
    courseFixture.detectChanges();
    expect(course.onEdit).toHaveBeenCalled();
  });
});
