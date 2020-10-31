import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../../dominio/Event';
import {Router} from '@angular/router';
import {EventoService} from '../../../../../services/evento/evento.service';
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router,
              private eventoService: EventoService,
              public cartService: CartService) {
  }

  eventosInseridos: Event[] = [];
  quantidade = 1;

  fees: number = 5;

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

  getTotalValueForPayment() {
    return this.cartService.getTotalValue() + this.fees;
  }

  teste() {
    console.log(this.cartService.order.tickets);
  }

  updateQuantityTickets(quantity: number, indexId: number) {
    console.log("entrou-----");
    this.cartService.order.tickets[indexId].quantity = quantity;
  }
}
