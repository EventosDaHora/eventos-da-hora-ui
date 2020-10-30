import {Injectable, Injector} from '@angular/core';
import {Event} from '../../dominio/Event';
import {BaseResourceService} from "../base-resource.service";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EventoService extends BaseResourceService<Event> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-event-api/events`, injector, Event.fromJson);
    }
}
