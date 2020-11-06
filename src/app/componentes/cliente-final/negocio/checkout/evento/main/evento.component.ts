import {Component, HostListener, OnInit} from '@angular/core';
import {Event} from '../../../../../../dominio/Event';
import {EventoService} from '../../../../../../services/evento/evento.service';
import {ResolucaoDispositivoService} from '../../../../../../services/resolucao-dispositivo.service';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketOrderRequest} from "../../../../../../dominio/order/request/TicketOrderRequest";
import {CartService} from "../../../../../../services/cart.service";

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
                private router: Router,
                public cartService: CartService) {
    }

    ngOnInit(): void {
        this.tamanhoDaTela();
        if (!this.eventoService.eventSelected) {
            this.router.navigate(['/']);
        }
        this.evento = this.eventoService.eventSelected;
    }

    @HostListener('window:resize', ['$event'])
    tamanhoDaTela() {
        this.isMobile = this.resolucao.tamanhoDaTela();
    }

    get ordemPreco(): string[] {
        return ['maior-menor', 'menor-maior'];
    }

    public addCart(ticketOrder: TicketOrderRequest) {
        ticketOrder.event = this.evento;
        this.cartService.addTicketCart(ticketOrder);
    }
}
