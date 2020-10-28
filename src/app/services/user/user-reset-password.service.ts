import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from "../base-resource.service";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {User} from "../../dominio/user/user.model";
import {UserResetPassword} from "../../dominio/user/user-reset-password.model";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class UserResetPasswordService extends BaseResourceService<UserResetPassword> {

    constructor(protected injector: Injector) {
        super(`${environment.apiUrl}/eventos-da-hora-user-api/users/password/reset`, injector, UserResetPassword.fromJson);
    }

    public resetPassword(resource: UserResetPassword): Observable<User> {
        const url = `${this.apiPath}/${resource.dsEmail}`;

        return this.http.post(url, null).pipe(
            map(() => resource),
            catchError(this.handlerError)
        );
    }
}
