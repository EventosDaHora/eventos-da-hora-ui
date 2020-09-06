// TODO: Buscar eventos de acordo com maior número de compras (Eventos Populares),
// perto da localização do usuário (Perto de você) e
// filmes populares


import {Component, Input, OnInit} from '@angular/core';
import {Evento} from 'src/app/dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss']
})
export class CardEventoComponent implements OnInit {

  eventos: Evento[] = [];

  responsiveOptions;

  @Input()
  mostrarInfosEvento ? = true;

  constructor(private eventoService: EventoService) {
    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1800px',
        numVisible: 4,
        numScroll: 4
      },

      {
        breakpoint: '1600px',
        numVisible: 3,
        numScroll: 4
      },
      {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 5
      },
      {
        breakpoint: '900px',
        numVisible: 1,
        numScroll: 3
      }
    ];
  }

  ngOnInit(): void {
    this.eventos = this.eventoService.criaEventos();
  }

}
