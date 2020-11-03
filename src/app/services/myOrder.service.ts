import {Injectable, Injector} from '@angular/core';
import {OrderRequest} from "../dominio/order/request/OrderRequest";
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";
import {Order} from "../dominio/order/Order";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MyOrderService extends BaseResourceService<Order> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/eventos-da-hora-order-api/orders`, injector, Order.fromJson);
  }

}
