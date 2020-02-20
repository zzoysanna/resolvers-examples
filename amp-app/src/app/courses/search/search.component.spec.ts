import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from "@angular/forms";
import { By } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material";
import { TranslateModule } from "@ngx-translate/core";

const VALUE = 'test';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        MatIconModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search method', () => {
    let input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = VALUE;
    input.nativeElement.dispatchEvent(new Event('input'));

    expect(component.query).toEqual(VALUE);
  });
});
