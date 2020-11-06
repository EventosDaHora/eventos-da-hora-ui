import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../../../dominio/Cliente';
import {CategoriaEvento} from '../../../../../dominio/enums/CategoriaEvento';
import {Event} from '../../../../../dominio/Event';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {EventoService} from '../../../../../services/evento/evento.service';
import {AuthService} from "../../../../../infra/security/auth.service";
import {CartService} from "../../../../../services/cart.service";
import {NotificationService} from "../../../../../services/notification.service";
import {OrderRequestService} from "../../../../../services/orderRequest.service";

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
// @ts-ignore
export class FinalizarPedidoComponent implements OnInit {

  pais: string;
  paises: any[];
  eventosInseridos: Event[] = [];
  quantidade = 1;
  cliente: Cliente;
  quantidades: number[];
  metodoPagamento: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              public cartService: CartService,
              private eventoService: EventoService,
              private notificationService: NotificationService) {
    this.paises = ['New York', 'Rome', 'London', 'Istanbul', 'Paris'];
    this.cliente = {
      nome: this.authService.currentUser.nmUser,
      email: this.authService.currentUser.sub,
      celular: this.authService.currentUser.dsCellphone
    };

  }

  ngOnInit(): void {
    if(this.cartService.empty()){
      this.router.navigate(['/']);
    }

  }

  public finalizarPedido() {
    if(!this.metodoPagamento){
      this.notificationService.warning('Método de pagamento deve ser escolhido para continuar', 'Pagamento');
    }else {

      this.cartService.addPaymentType(this.metodoPagamento);

      this.cartService.sendOrder().subscribe(
          (resourceTemp) => this.actionsForSuccess(),
          (error) => this.actionsForError(error)
      );
    }
  }

  protected actionsForSuccess(): void {
    this.notificationService.success('Sucesso ao realizar compra!', 'Ingresso');
    this.cartService.clearCart();
    this.router.navigate(['conta/dashboard-usuario']);
  }

  protected actionsForError(error): void {
    this.notificationService.error('Falha ao processar sua solicitação!', 'Erro');
    this.router.navigate(['/']);
  }
}
