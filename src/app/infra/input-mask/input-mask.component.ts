import {Component, Input} from '@angular/core';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['../input/input-texto.scss']
})
export class InputMaskComponent extends InputComponent{

  @Input()
  mask: string;

  constructor() {
    super();
  }

}
