import { Component, OnInit } from '@angular/core';
import {Event} from '../../../../dominio/Event';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.scss']
})
export class FormularioEventoComponent implements OnInit {

  evento: Event;

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEvento();
  }

}
