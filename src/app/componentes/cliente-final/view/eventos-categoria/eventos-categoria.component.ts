import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../dominio/Event';

@Component({
  selector: 'app-eventos-categoria',
  templateUrl: './eventos-categoria.component.html',
  styleUrls: ['./eventos-categoria.component.scss']
})
export class EventosCategoriaComponent implements OnInit {

  evento: Event;

  chaveDeBusca: string;

  eventosPesquisadoPorChave: Event[];

  constructor() { }

  ngOnInit(): void {
    this.evento = history.state.filtro.evento;
    this.chaveDeBusca = history.state.filtro.filtroEvento;
    // TODO: Buscar Eventos no backend de acordo com a chave de busca
  }

}
