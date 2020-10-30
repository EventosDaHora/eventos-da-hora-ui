import {Component, HostListener, OnInit} from '@angular/core';
import {Event} from '../../../../../../dominio/Event';
import {EventoService} from '../../../../../../services/evento/evento.service';
import {ResolucaoDispositivoService} from '../../../../../../services/resolucao-dispositivo.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  evento: Event;
  eventId: string;
  isMobile = true;

  ordemPrecoSelecionada: string;

  constructor(private eventoService: EventoService,
              private resolucao: ResolucaoDispositivoService,
              protected route: ActivatedRoute,) {
    this.eventId = this.route.snapshot.params.eventId;

  }

  ngOnInit(): void {
    this.tamanhoDaTela();
    // this.evento = this.eventoService.criaEvento();
  }

  @HostListener('window:resize', ['$event'])
  tamanhoDaTela() {
        this.isMobile = this.resolucao.tamanhoDaTela();
  }

  get ordemPreco(): string[] {
    return ['maior-menor', 'menor-maior'];
  }

}
