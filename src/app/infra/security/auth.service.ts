import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserAuth} from './user-auth';
import {Observable, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl = `${environment.apiUrl}/eventos-da-hora-user-api/login`;
    currentUser: any;

    constructor(private http: HttpClient, protected router: Router) {
        const token = localStorage.getItem('token');
        if (token) {
            const jwt = new JwtHelperService();
            this.currentUser = jwt.decodeToken(token);
        }
    }

    login(userAuth: UserAuth): Observable<UserAuth> {
        return this.http.post<any>(this.apiUrl, userAuth).pipe(
            map(response => {
                const result = response;
                if (result && result.token) {

                    localStorage.setItem('token', result.token);
                    const jwt = new JwtHelperService();
                    this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                    console.log(this.currentUser);
                    return this.currentUser;
                } else {
                    return null;
                }
            }),
            catchError(this.handleError)
        );
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('token');
        this.router.navigate(['/conta/login']);
    }

    isLoggedIn() {
        if (localStorage.getItem('token') !== null) {
            if ((new JwtHelperService()).isTokenExpired(localStorage.getItem('token'))) {
                localStorage.removeItem('token');

                this.currentUser = null;
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        } else {
            localStorage.removeItem('token');
            this.currentUser = null;
            return false;
        }
    }

    isAvailable(role: string) {
        if (this.isLoggedIn()) {
            if (this.currentUser.rol.includes(role)) {
                return true;
            }
        }
        return false;
    }

    protected handleError(error: any): Observable<any> {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return throwError(error);
    }
}
