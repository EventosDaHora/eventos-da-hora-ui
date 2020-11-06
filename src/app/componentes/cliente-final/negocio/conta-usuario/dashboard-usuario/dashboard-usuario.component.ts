import {Component, OnInit} from '@angular/core';
import {MyOrderService} from "../../../../../services/myOrder.service";
import {Order} from "../../../../../dominio/order/Order";
import {OrderStatus} from "../../../../../dominio/order/OrderStatus";
import {PaymentService} from "../../../../../services/payment.service";
import {Payment} from "../../../../../dominio/payment/Payment";
import {TicketService} from "../../../../../services/ticket.service";
import {SectionService} from "../../../../../services/section.service";
import {Ticket} from "../../../../../dominio/Ticket";
import {tick} from "@angular/core/testing";
import {Section} from "../../../../../dominio/Section";
import {EventoService} from "../../../../../services/evento/evento.service";
import {Event} from "../../../../../dominio/Event";

@Component({
    selector: 'app-dashboard-usuario',
    templateUrl: './dashboard-usuario.component.html',
    styleUrls: ['./dashboard-usuario.component.scss']
})
// @ts-ignore
export class DashboardUsuarioComponent implements OnInit {

    myOrders: Order[] = [];

    constructor(public myOrderService: MyOrderService,
                public paymentService: PaymentService,
                public ticketService: TicketService,
                public sectionService: SectionService,
                public eventoService: EventoService) {

    }

    ngOnInit(): void {
        this.myOrderService.getAll().subscribe(order => {
            this.myOrders = order as Order[];
            this.myOrders.forEach(orderItem => {
                this.getPaymentOrder(orderItem);
            });
        })
    }

    public getStatusOrder(status: string) {
     return OrderStatus[status as OrderStatus];
    }

    public getPaymentOrder(order: Order){
        if(order.idPayment === null)
            return;

        if(order.paymentRequest === undefined) {
            order.paymentRequest = null;
            this.paymentService.getById(order.idPayment)
                .subscribe(response =>{
                    order.paymentRequest = response as Payment;
                    return order.paymentRequest.vlAmount;
                });
        }
    }

    public getSectionTicket(orderItem: Order) {
        orderItem.items.forEach(ticket =>{
            if(ticket.sectionId == null) {
                this.ticketService.getById(ticket.id).subscribe(responseTicket => {
                    let ticketAux = responseTicket as Ticket;
                    this.sectionService.getById(ticketAux.sectionId).subscribe(responseSection => {
                        ticket.sectionRequest = responseSection as Section;
                        this.eventoService.getById(ticket.sectionRequest.eventId).subscribe(responseEvent =>{
                            ticket.sectionRequest.eventRequest = responseEvent as Event;
                        })
                    })
                })
            }
        });
    }
}
