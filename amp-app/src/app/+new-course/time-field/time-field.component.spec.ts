import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFieldComponent } from './time-field.component';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

describe('TimeFieldComponent', () => {
  let component: TimeFieldComponent;
  let fixture: ComponentFixture<TimeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFieldComponent ],
      imports: [
        TranslateModule.forRoot(),
        FormsModule,
        SharedModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
