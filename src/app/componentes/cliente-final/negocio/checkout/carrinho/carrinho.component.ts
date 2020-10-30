import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../../dominio/Event';
import {Router} from '@angular/router';
import {EventoService} from '../../../../../services/evento/evento.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router,
              private eventoService: EventoService) {
  }

  eventosInseridos: Event[] = [];
  quantidade = 1;

  ngOnInit(): void {

    // this.eventosInseridos = this.eventoService.criaEventos();
  }

  finalizarPedido() {
    this.router.navigate(['/checkout/finalizar-pedido'],
      {
        queryParams: {
          eventosInseridos: this.eventosInseridos
        }, queryParamsHandling: 'preserve'
      });
  }

}
