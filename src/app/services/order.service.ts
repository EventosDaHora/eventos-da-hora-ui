import {Injectable, Injector} from '@angular/core';
import {Order} from "../dominio/order/Order";
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class OrderService extends BaseResourceService<Order> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/eventos-da-hora-order-api/orders`, injector, Order.fromJson);
  }

}
