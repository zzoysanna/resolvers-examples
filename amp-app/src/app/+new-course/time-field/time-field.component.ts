import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'amp-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimeFieldComponent),
    multi: true,
  }],
})
export class TimeFieldComponent implements OnInit, ControlValueAccessor {
  
  @Input()
  public value: number;

  constructor() { }

  public ngOnInit() {
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};

  public writeValue(value: number): void {
    this.value = value;
  }

  public change(value: number): void {
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
