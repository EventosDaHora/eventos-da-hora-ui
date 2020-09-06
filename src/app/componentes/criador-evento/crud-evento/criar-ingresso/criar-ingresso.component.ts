import {Component, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-criar-ingresso',
  templateUrl: './criar-ingresso.component.html',
  styleUrls: ['./criar-ingresso.component.scss']
})
export class CriarIngressoComponent implements OnInit {

  evento: Evento;

  eventos: Evento[];

  nomesEvento: string[];

  tipoIngresso: string;

  ingressoSubject: Subject<string> = new Subject<string>();

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEventoVazio();
    this.eventos = this.eventoService.criaEventos();
    this.nomesEvento = this.eventos.map(evento => evento.nome);
  }

  notificarFilho() {
    this.ingressoSubject.next(this.tipoIngresso);
    this.tipoIngresso = '';
  }

}
