import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './new-course.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material";
import { TimeFieldComponent } from "../time-field/time-field.component";
import { DateFieldComponent } from "../date-field/date-field.component";
import { AuthorsFieldComponent } from "../authors-field/authors-field.component";
import { TextMaskModule } from "angular2-text-mask";
import { RouterModule } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewCourseComponent,
        TimeFieldComponent,
        DateFieldComponent,
        AuthorsFieldComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule.forRoot(),
        MatIconModule,
        TextMaskModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
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
