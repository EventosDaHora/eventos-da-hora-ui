import {Directive, Input} from '@angular/core';
import {AbstractControleValueAccessor} from '../AbstractControleValueAccessor';

@Directive()
export class InputComponent extends AbstractControleValueAccessor{
  @Input() id?: string;
  @Input() tipo?: string;
  @Input() placeholder ?: string;
  @Input() required ? = false;
  @Input() label ?: string;
}
