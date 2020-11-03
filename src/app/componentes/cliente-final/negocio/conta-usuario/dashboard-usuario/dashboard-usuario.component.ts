import {Component, OnInit} from '@angular/core';
import {MyOrderService} from "../../../../../services/myOrder.service";
import {Order} from "../../../../../dominio/order/Order";
import {OrderStatus} from "../../../../../dominio/order/OrderStatus";
import {PaymentService} from "../../../../../services/payment.service";
import {Payment} from "../../../../../dominio/payment/Payment";

@Component({
    selector: 'app-dashboard-usuario',
    templateUrl: './dashboard-usuario.component.html',
    styleUrls: ['./dashboard-usuario.component.scss']
})
export class DashboardUsuarioComponent implements OnInit {

    myOrders: Order[] = [];

    constructor(public myOrderService: MyOrderService,
                public paymentService: PaymentService) {

    }

    ngOnInit(): void {
        this.myOrderService.getAll().subscribe(order => {
            this.myOrders = order as Order[];
        })
    }

    public getStatusOrder(status: string) {
     return OrderStatus[status as OrderStatus];
    }

    public getTotalValue(order: Order){
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
}
