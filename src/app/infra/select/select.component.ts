import {Component, Input} from '@angular/core';
import {AbstractControleValueAccessor} from '../AbstractControleValueAccessor';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends AbstractControleValueAccessor{

  @Input()
  itens: any[];

  @Input()
  label ?: string;

  @Input()
  placeholder ?: string;

  @Input()
  id: string;

  constructor() {
    super();
  }


}
