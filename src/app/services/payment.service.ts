import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";
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
