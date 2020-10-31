import {Injectable} from '@angular/core';
import {Order} from "../dominio/order/Order";
import {TicketOrder} from "../dominio/order/TicketOrder";
import {UserService} from "./user/user.service";
import {AuthService} from "../infra/security/auth.service";
import {Payment} from "../dominio/order/Payment";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class CartService {

    public order: Order;

    constructor(public authService: AuthService) {
        this.order = new Order();

        if( authService.currentUser) {
            this.order.emailNotification = authService.currentUser.dsEmail;
            this.order.userId = authService.currentUser.idUser;
        }
        console.log(authService.currentUser);
    }

    public addPaymentType(paymentType: string){
        this.order.payment = new Payment(paymentType);
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

    public getQuantityItemCart(): number {
        let total: number = 0;
        this.order.tickets.forEach(ticket => {
            total ++;
        })

        return total;
    }

}
