import {Component, OnInit} from '@angular/core';
import {Evento} from 'src/app/dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  categorias: string[] = [];

  evento: Evento;

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEvento();
    this.categorias = this.eventoService.getCategorias();
  }

}
