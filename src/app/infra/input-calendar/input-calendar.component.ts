import {Component, Input} from '@angular/core';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['../input/input-texto.scss']
})
export class InputCalendarComponent extends InputComponent {

  data: Date;

  @Input()
  somenteHorario ? = false;

  @Input()
  horaEdata ? = false;

  @Input()
  inline ?: false;

  constructor() {
    super();
    this.getTipo();
  }

  getTipo() {
    if ((this.somenteHorario === true) && (this.horaEdata === true)) {
      this.horaEdata = false;
    }
  }

}
