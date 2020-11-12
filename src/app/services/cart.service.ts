import {Injectable} from '@angular/core';
import {OrderRequest} from "../dominio/order/request/OrderRequest";
import {TicketOrderRequest} from "../dominio/order/request/TicketOrderRequest";
import {UserService} from "./user/user.service";
import {AuthService} from "../infra/security/auth.service";
import {PaymentRequest} from "../dominio/order/request/PaymentRequest";
import {Event} from "../dominio/Event";
import {OrderRequestService} from "./orderRequest.service";
import {User} from "../dominio/user/user.model";
import {NotificationService} from "./notification.service";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class CartService {

    public order: OrderRequest;

    constructor(public authService: AuthService,
                public orderService: OrderRequestService,
                public notificationService: NotificationService,
                private router: Router) {
        this.order = new OrderRequest();

        if (authService.currentUser) {
            this.order.emailNotification = authService.currentUser.sub;
            this.order.userId = authService.currentUser.idUser;
        }
    }

    public clearCart() {
        this.order = new OrderRequest();
    }

    public addPaymentType(paymentType: string) {
        this.order.payment = new PaymentRequest(paymentType,  this.getTotalValue());
    }

    public addFeesCart(fees: number) {
        this.order.fees = fees;
    }

    public addTicketCart(ticketOrder: TicketOrderRequest) {
        let isAdd = true;
        this.order.tickets.forEach(t => {
            if(ticketOrder.section.id === t.section.id){
                t.quantity += ticketOrder.quantity;
                isAdd = false;
            }
        })
        if(isAdd) {
            this.order.tickets.push(ticketOrder);
        }
    }

    public removeTicketCart(indexList: number) {
        this.order.tickets.splice(indexList, 1);
    }

    public getTotalValue(): number {
        let total: number = 0;
        this.order.tickets.forEach(ticket => {
            total += ticket.quantity * ticket.section.ammount;
        })

        return total;
    }

    public getTotalFees() {
        return this.order.fees;
    }

    public getQuantityItemCart(): number {
        let total: number = 0;
        this.order.tickets.forEach(ticket => {
            total++;
        })

        return total;
    }

    public empty() {
        return this.getQuantityItemCart() <= 0;
    }

    public getTotalValueAndTotalFees() {
        return this.getTotalFees() + this.getTotalValue();
    }

    public sendOrder() {
        console.log(this.order);
        return this.orderService.create(this.order);

    }

}
