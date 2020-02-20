import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './new-course.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseComponent ],
      imports: [
        FormsModule,
        SharedModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
