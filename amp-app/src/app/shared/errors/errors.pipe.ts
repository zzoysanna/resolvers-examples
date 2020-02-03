import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'errors'
})
export class ErrorsPipe implements PipeTransform {

  private messages = {
    maxlength: 'Too long',
    required: 'Field is required',
    numberValidator: 'Only numbers are allowed',
    pattern: "Date is incorrect",
  }

  private anyError = 'Error';

  public transform(control: AbstractControl): string {
    const {errors} = control;
    if(Object.keys(errors).length > 0) {
      return this.getMessage(Object.keys(errors)[0])
    }
    return null;
  }

  private getMessage(key: string): string {
    if (key in this.messages) {
      return this.messages[key];
    }
    return this.anyError;
  }

}
