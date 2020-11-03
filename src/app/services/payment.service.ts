import {Injectable, Injector} from '@angular/core';
import {OrderRequest} from "../dominio/order/request/OrderRequest";
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";
import {Order} from "../dominio/order/Order";
import {Payment} from "../dominio/payment/Payment";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PaymentService extends BaseResourceService<Payment> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/eventos-da-hora-payment-api/payments`, injector, Payment.fromJson);
  }

}
