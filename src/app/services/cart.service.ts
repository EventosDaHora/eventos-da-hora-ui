import {Injectable} from '@angular/core';
import {Order} from "../dominio/order/Order";
import {TicketOrder} from "../dominio/order/TicketOrder";
import {UserService} from "./user/user.service";
import {AuthService} from "../infra/security/auth.service";
import {Payment} from "../dominio/order/Payment";
import {Event} from "../dominio/Event";
import {OrderService} from "./order.service";
import {User} from "../dominio/user/user.model";
import {NotificationService} from "./notification.service";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class CartService {

    public order: Order;

    constructor(public authService: AuthService,
                public orderService: OrderService,
                public notificationService: NotificationService,
                private router: Router) {
        this.order = new Order();

        if (authService.currentUser) {
            this.order.emailNotification = authService.currentUser.sub;
            this.order.userId = authService.currentUser.idUser;
        }
    }

    public clearCart() {
        this.order = new Order();
    }

    public addPaymentType(paymentType: string) {
        this.order.payment = new Payment(paymentType,  this.getTotalValue());
    }

    public addFeesCart(fees: number) {
        this.order.fees = fees;
    }

    public addTicketCart(ticketOrder: TicketOrder) {
        this.order.tickets.push(ticketOrder);
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
        return this.orderService.create(this.order);

    }

}
