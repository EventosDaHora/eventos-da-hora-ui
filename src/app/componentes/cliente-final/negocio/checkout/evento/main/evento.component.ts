import {Component, HostListener, OnInit} from '@angular/core';
import {Evento} from '../../../../../../dominio/Evento';
import {EventoService} from '../../../../../../services/evento/evento.service';
import {ResolucaoDispositivoService} from '../../../../../../services/resolucao-dispositivo.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  evento: Evento;

  isMobile = true;

  ordemPrecoSelecionada: string;

  constructor(private eventoService: EventoService,
              private resolucao: ResolucaoDispositivoService) { }

  ngOnInit(): void {
    this.tamanhoDaTela();
    this.evento = this.eventoService.criaEvento();
  }

  @HostListener('window:resize', ['$event'])
  tamanhoDaTela() {
        this.isMobile = this.resolucao.tamanhoDaTela();
  }

  get ordemPreco(): string[] {
    return ['maior-menor', 'menor-maior'];
  }

}
