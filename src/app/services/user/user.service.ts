import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "../base-resource.service";
import {User} from "../../dominio/user/user.model";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/eventos-da-hora-user-api/users`, injector, User.fromJson);
  }

}
