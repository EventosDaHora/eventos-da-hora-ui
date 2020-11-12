import {Inject, Injectable} from '@angular/core';
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

const STORAGE_KEY = 'ACTUAL-CART-OBJECT';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class CartService {

    constructor(public authService: AuthService,
                public orderService: OrderRequestService,
                public notificationService: NotificationService,
                private router: Router) {

        if(this.getCartFromStorage() === null){
            this.clearCart();
        }

        if (authService.currentUser) {
            this.updateUserData(authService.currentUser.sub, authService.currentUser.idUser);
        }
    }

    private updateCartFromStorage(order: OrderRequest){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
    }

    private getCartFromStorage(): OrderRequest{
        return JSON.parse(localStorage.getItem(STORAGE_KEY));
    }

    public getOrder(){
        return this.getCartFromStorage();
    }

    public clearCart() {
        this.updateCartFromStorage(new OrderRequest());
    }

    public addPaymentType(paymentType: string) {
        let order = this.getCartFromStorage();
        order.payment = new PaymentRequest(paymentType,  this.getTotalValue());
        this.updateCartFromStorage(order);
    }

    public addFeesCart(fees: number) {
        let order = this.getCartFromStorage();
        order.fees = fees;
        this.updateCartFromStorage(order);
    }

    public addTicketCart(ticketOrder: TicketOrderRequest) {
        let isAdd = true;
        let order = this.getCartFromStorage();

        order.tickets.forEach(t => {
            if(ticketOrder.section.id === t.section.id){
                t.quantity += ticketOrder.quantity;
                isAdd = false;
            }
        })
        if(isAdd) {
            order.tickets.push(ticketOrder);
        }

        this.updateCartFromStorage(order);
    }

    public addTicketCartWithQuantity(ticketOrder: TicketOrderRequest, quantity: number) {
        while (quantity > 0){
            this.addTicketCart(ticketOrder);
            quantity--;
        }
    }

    public removeTicketCart(indexList: number) {
        let order = this.getCartFromStorage();
        order.tickets.splice(indexList, 1);
        this.updateCartFromStorage(order);
    }

    public getTotalValue(): number {
        let order = this.getCartFromStorage();
        let total: number = 0;
        order.tickets.forEach(ticket => {
            total += ticket.quantity * ticket.section.ammount;
        })

        return total;
    }

    public getTotalFees() {
        let order = this.getCartFromStorage();
        return order.fees;
    }

    public getQuantityItemCart(): number {
        let order = this.getCartFromStorage();
        let total: number = 0;
        order.tickets.forEach(ticket => {
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
        let order = this.getCartFromStorage();
        return this.orderService.create(order);
    }

    updateUserData(sub: any, idUser: any) {
        let order = this.getCartFromStorage();

        order.emailNotification = sub;
        order.userId = idUser;

        this.updateCartFromStorage(order);
    }

    updateTicketQuantity(ticket: TicketOrderRequest, quantity: number) {
        let order = this.getOrder();
        order.tickets.forEach(t => {
            if(t.id === ticket.id){
                t.quantity = quantity;
            }
        })

        this.updateCartFromStorage(order);
    }
}
