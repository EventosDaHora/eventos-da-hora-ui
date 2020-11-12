import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../../dominio/Event';
import {Router} from '@angular/router';
import {EventoService} from '../../../../../services/evento/evento.service';
import {CartService} from "../../../../../services/cart.service";
import {AuthService} from "../../../../../infra/security/auth.service";
import {NotificationService} from "../../../../../services/notification.service";
import {OrderRequest} from "../../../../../dominio/order/request/OrderRequest";
import {TicketOrderRequest} from "../../../../../dominio/order/request/TicketOrderRequest";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
// @ts-ignore
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router,
              private eventoService: EventoService,
              public cartService: CartService,
              public authService: AuthService,
              public notificationService: NotificationService) {
  }

  eventosInseridos: Event[] = [];
  quantidade = 1;

  fees: number = 5;

  public cartTemp:  OrderRequest;

  ngOnInit(): void {
    this.cartTemp = this.cartService.getOrder();
  }

  public finalizarPedido() {
    this.buildFinalOrder();

    if(!this.authService.isLoggedIn()){
      this.notificationService.warning('É necessário estar logado para concluir sua compra!', 'Ingresso');
      this.router.navigate(['/conta/login']);
    }

    this.router.navigate(['/checkout/finalizar-pedido'],
      {
        queryParams: {
          eventosInseridos: this.eventosInseridos
        }, queryParamsHandling: 'preserve'
      });
  }

  private buildFinalOrder() {
    if( this.authService.currentUser) {
      this.cartService.updateUserData(this.authService.currentUser.sub, this.authService.currentUser.idUser);
    }

    this.cartService.addFeesCart(this.fees);
  }

  public getTotalValueForPayment() {
    return this.cartService.getTotalValue() + this.fees;
  }

  public removeTicketCart(indexId: number) {
    this.cartService.removeTicketCart(indexId)
    this.ngOnInit();
  }

  updateTicketQuantity(ticket: TicketOrderRequest, quantity: number) {
    this.cartService.updateTicketQuantity(ticket, quantity);
  }
}
