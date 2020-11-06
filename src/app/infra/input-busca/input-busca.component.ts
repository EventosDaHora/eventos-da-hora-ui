import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {InputTextoComponent} from "../input-texto/input-texto.component";
import {TicketOrderRequest} from "../../dominio/order/request/TicketOrderRequest";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextoComponent),
      multi: true
    }
  ]
})
export class InputBuscaComponent extends InputComponent {

  constructor() {
    super();
  }

  @Output()
  change: EventEmitter<String> = new EventEmitter<String>();


  search() {
    console.log('--- emit ---');
    this.change.emit(this.value);
  }

}
