import {Component, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';

@Component({
  selector: 'app-eventos-categoria',
  templateUrl: './eventos-categoria.component.html',
  styleUrls: ['./eventos-categoria.component.scss']
})
export class EventosCategoriaComponent implements OnInit {

  evento: Evento;

  chaveDeBusca: string;

  eventosPesquisadoPorChave: Evento[];

  constructor() { }

  ngOnInit(): void {
    this.evento = history.state.filtro.evento;
    this.chaveDeBusca = history.state.filtro.filtroEvento;
    // TODO: Buscar Eventos no backend de acordo com a chave de busca
    console.log(history.state.filtro);
  }

}
