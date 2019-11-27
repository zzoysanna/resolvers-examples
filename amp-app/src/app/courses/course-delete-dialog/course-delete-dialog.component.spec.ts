import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeleteDialogComponent } from './course-delete-dialog.component';
import { MatIconModule } from "@angular/material";

describe('CourseDeleteDialogComponent', () => {
  let component: CourseDeleteDialogComponent;
  let fixture: ComponentFixture<CourseDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDeleteDialogComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
