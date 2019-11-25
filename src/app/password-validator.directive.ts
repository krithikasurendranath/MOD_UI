import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi:true}]
})
export class PasswordValidatorDirective implements Validator {

  constructor() { }
  public validate(control :AbstractControl): { [key: string] : any} {
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
    let valid =passwordRegex.test(control.value);
    return control.value < 1 || valid ? null: {"password" : true};
  }
}
