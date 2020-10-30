import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "../base-resource.service";
import {Category} from "../../dominio/Category";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService extends BaseResourceService<Category> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-event-api/categories`, injector, Category.fromJson);
    }

}
