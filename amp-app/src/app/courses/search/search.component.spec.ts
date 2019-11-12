import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from "@angular/forms";
import {By} from '@angular/platform-browser';

const VALUE = 'test';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
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

  it('should not call search method if no value', () => {
    spyOn(console, 'log');
    const searchButton = fixture.debugElement.query(By.css('button'));
    searchButton.triggerEventHandler('click', null);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('should call search method', () => {
    spyOn(console, 'log');
    let input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = VALUE;
    input.nativeElement.dispatchEvent(new Event('input'));

    const searchButton = fixture.debugElement.query(By.css('button'));
    searchButton.triggerEventHandler('click', null);
    expect(component.query).toEqual(VALUE);
    expect(console.log).toHaveBeenCalledWith(VALUE);
  });
});
