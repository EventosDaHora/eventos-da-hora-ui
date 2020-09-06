import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Evento, Ingresso, TipoIngresso} from '../../../../../dominio/Evento';
import {Subject} from 'rxjs';
import {EventoService} from '../../../../../services/evento/evento.service';

@Component({
  selector: 'app-tipo-preco',
  templateUrl: './tipo-preco.component.html',
  styleUrls: ['./tipo-preco.component.scss']
})
export class TipoPrecoComponent implements OnInit, OnDestroy {

  @Input()
  tipoIngressoSubject: Subject<string>;

  @Input()
  evento: Evento;

  ingresso: Ingresso;

  tipoIngresso: TipoIngresso;

  tiposIngresso: TipoIngresso[] = [];

  constructor(private eventoService: EventoService) {
    this.ingresso = this.eventoService.criarIngressoVazio();
  }

  ngOnInit(): void {
    this.tipoIngressoSubject.subscribe(novoTipo => {
      this.tipoIngresso = {preco: 0, quantidade: 0, descricao: novoTipo};
      if (!this.ingresso.tipos.includes(this.tipoIngresso)) {
        this.ingresso.tipos.push(this.tipoIngresso);
        console.table(this.tipoIngresso);
      }

      if (!this.evento.ingressos.includes(this.ingresso)) {
        this.evento.ingressos.push(this.ingresso);
      }
    });

  }

  ngOnDestroy() {
    this.tipoIngressoSubject.unsubscribe();
  }
}
