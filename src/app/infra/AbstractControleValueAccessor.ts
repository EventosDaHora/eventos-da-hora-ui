import {ControlValueAccessor} from '@angular/forms';
import { Input, Directive } from '@angular/core';

@Directive()
export class AbstractControleValueAccessor implements ControlValueAccessor {

  @Input() val: any;

  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }

  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }



}
