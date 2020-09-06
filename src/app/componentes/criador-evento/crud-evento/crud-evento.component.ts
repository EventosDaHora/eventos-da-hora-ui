import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../services/evento/evento.service';
import {Evento} from '../../../dominio/Evento';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-crud-evento',
  templateUrl: './crud-evento.component.html',
  styleUrls: ['./crud-evento.component.scss']
})
export class CrudEventoComponent implements OnInit {

  eventos: Evento[];

  cadastrando = false;

  items: MenuItem[];

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(): void {
    this.eventos = this.eventoService.criaEventos();
    this.items = [{
      label: 'Eventos',
      items: [
        {label: 'Criar Evento', icon: 'pi pi-fw pi-plus', routerLink: 'criar-evento'},
        {label: 'Todos os eventos', icon: 'pi pi-fw pi-star-o', routerLink: 'listar-evento'},
        {label: 'Calendário de Eventos', icon: 'pi pi-fw pi-calendar', routerLink: 'calendario'},
        {separator: true},
        {label: 'Criar Ingresso', icon: 'pi pi-ticket', routerLink: 'criar-ingresso'}
        // {label: 'Lista de Convidados', icon: 'pi pi-users'}
      ]
    },
      {
        label: 'Perfil',
        items: [
          {label: 'Ver perfil', icon: 'pi pi-fw pi-user'}
        ]
      }];
  }
}
