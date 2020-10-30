import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../../services/evento/evento.service';
import {Event} from '../../../../dominio/Event';
import {TipoGrafico} from '../../util/dominio/enums/TipoGrafico';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  eventos: Event[];

  graficoLinha = TipoGrafico.LINHA;
  graficoProgresso = TipoGrafico.PROGRESSO;
  graficoDoughnut = TipoGrafico.DOUGHNUT;

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    // this.eventos = this.eventoService.criaEventos();
  }

}
