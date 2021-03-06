import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../dominio/Event';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-listagem-evento',
  templateUrl: './listagem-evento.component.html',
  styleUrls: ['./listagem-evento.component.scss']
})
export class ListagemEventoComponent implements OnInit {

  @Input()
  eventos: Event[];

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(): void {
    if (!this.eventos) {
      // this.eventos = this.eventoService.criaEventos();
    }
  }
}
