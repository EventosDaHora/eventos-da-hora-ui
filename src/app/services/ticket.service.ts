import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";
import {Ticket} from "../dominio/Ticket";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class TicketService extends BaseResourceService<Ticket> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-event-api/tickets`, injector, Ticket.fromJson);
    }

}
