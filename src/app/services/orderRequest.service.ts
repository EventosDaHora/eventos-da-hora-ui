import {Injectable, Injector} from '@angular/core';
import {OrderRequest} from "../dominio/order/request/OrderRequest";
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class OrderRequestService extends BaseResourceService<OrderRequest> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/eventos-da-hora-order-api/orders`, injector, OrderRequest.fromJson);
  }

}
