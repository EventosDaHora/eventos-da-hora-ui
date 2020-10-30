import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../dominio/Event';
import {EventoService} from '../../../../services/evento/evento.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-criar-ingresso',
  templateUrl: './criar-ingresso.component.html',
  styleUrls: ['./criar-ingresso.component.scss']
})
export class CriarIngressoComponent implements OnInit {

  evento: Event;

  eventos: Event[];

  nomesEvento: string[];

  tipoIngresso: string;

  ingressoSubject: Subject<string> = new Subject<string>();

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    // this.evento = this.eventoService.criaEventoVazio();
    // this.eventos = this.eventoService.criaEventos();
    // this.nomesEvento = this.eventos.map(evento => evento.name);
  }

  notificarFilho() {
    this.ingressoSubject.next(this.tipoIngresso);
    this.tipoIngresso = '';
  }

}
