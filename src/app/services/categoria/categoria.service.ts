import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "../base-resource.service";
import {Categoria} from "../../dominio/Categoria";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService extends BaseResourceService<Categoria> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-event-api/categories`, injector, Categoria.fromJson);
    }

}
