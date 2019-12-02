import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeleteDialogComponent } from './course-delete-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef, MatIconModule } from "@angular/material";

describe('CourseDeleteDialogComponent', () => {
  let component: CourseDeleteDialogComponent;
  let fixture: ComponentFixture<CourseDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDeleteDialogComponent ],
      imports: [ MatIconModule, MatDialogModule],
      providers: [ MatDialog, MatDialogRef, MAT_DIALOG_DATA ],
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
