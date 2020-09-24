import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfraModule} from './infra/infra.module';
import {SidebarModule} from 'primeng/sidebar';
import {JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./infra/security/auth.service";
import {AuthGuard} from "./infra/security/auth-guard.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        InfraModule,
        SidebarModule,

        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                allowedDomains: [environment.apiWhitelisted],
                disallowedRoutes: [`${environment.apiUrl}/login`]
            }
        })
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
