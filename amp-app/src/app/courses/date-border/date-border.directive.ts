import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const colors = {
  upcoming: '#30b6dd',
  fresh: '#9bc837',
};

@Directive({
  selector: '[ampDateBorder]'
})
export class DateBorderDirective implements OnInit {

  @Input('ampDateBorder')
  public createdDate: string;

  constructor(
    private elementRef: ElementRef,
  ) {}

  public ngOnInit() {
    const now = new Date();
    const date = new Date(this.createdDate);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

    if(date < now && date >= twoWeeksAgo) {
      this.elementRef.nativeElement.style.borderColor = colors.fresh;
    } else if (date > now) {
      this.elementRef.nativeElement.style.borderColor = colors.upcoming;
    }
  }

}
