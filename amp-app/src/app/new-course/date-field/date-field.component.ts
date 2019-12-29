import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'amp-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateFieldComponent),
    multi: true,
  }],
})
export class DateFieldComponent implements OnInit, ControlValueAccessor {

  @Input()
  public value: string;

  public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(
    // private datePipe: DatePipe,
  ) { }

  public ngOnInit() {
    // this.value = this.datePipe.transform(this.value);
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};

  public writeValue(value: string): void {
    this.value = value;
  }

  public change(value: string): void {
    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
