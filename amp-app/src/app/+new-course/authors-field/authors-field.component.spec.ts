import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsFieldComponent } from './authors-field.component';
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule } from "@ngx-translate/core";

describe('AuthorsFieldComponent', () => {
  let component: AuthorsFieldComponent;
  let fixture: ComponentFixture<AuthorsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsFieldComponent ],
      imports: [
        FormsModule,
        MatIconModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
