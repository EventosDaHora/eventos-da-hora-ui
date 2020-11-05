import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "./base-resource.service";
import {environment} from "../../environments/environment";
import {Section} from "../dominio/Section";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class SectionService extends BaseResourceService<Section> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-event-api/sections`, injector, Section.fromJson);
    }

}
