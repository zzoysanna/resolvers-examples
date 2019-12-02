import { DateBorderDirective } from './date-border.directive';
import { ElementRef } from "@angular/core";

describe('DateBorderDirective', () => {
  it('should create an instance', () => {
    const directive = new DateBorderDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
