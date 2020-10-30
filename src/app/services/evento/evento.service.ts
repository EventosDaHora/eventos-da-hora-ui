import {Injectable, Injector} from '@angular/core';
import {Event} from '../../dominio/Event';
import {BaseResourceService} from "../base-resource.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class EventoService extends BaseResourceService<Event> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-event-api/events`, injector, Event.fromJson);
    }


    getRandomEvent(): Observable<Event> {
        const url = `${this.apiPath}/random`;

        return this.http.get(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handlerError)
        );
    }
}
