import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeleteDialogComponent } from './course-delete-dialog.component';
import { MatDialogModule, MatIconModule } from "@angular/material";
import { TranslateModule } from "@ngx-translate/core";

describe('CourseDeleteDialogComponent', () => {
  let component: CourseDeleteDialogComponent;
  let fixture: ComponentFixture<CourseDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDeleteDialogComponent ],
      imports: [
        MatIconModule,
        MatDialogModule,
        TranslateModule.forRoot(),
      ],
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
