import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFieldComponent } from './date-field.component';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material";
import {TextMaskModule} from "angular2-text-mask";

describe('DateFieldComponent', () => {
  let component: DateFieldComponent;
  let fixture: ComponentFixture<DateFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFieldComponent ],
      imports: [
        TranslateModule.forRoot(),
        FormsModule,
        MatIconModule,
        TextMaskModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
