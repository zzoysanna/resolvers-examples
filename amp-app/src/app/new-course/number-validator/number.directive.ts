import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[ampNumberValidate]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NumberDirective, multi: true }
  ]
})
export class NumberDirective implements Validator {

  constructor() { }

  public validate(control: FormControl): ValidationErrors | null {
    control.setErrors(null)
    if (!control.value){
      return null;
    }
    if (isNaN(parseFloat(control.value))) {
      return {
        'numberValidator': 'Should be numbers',
      }
    }
    return null;
  }

}
