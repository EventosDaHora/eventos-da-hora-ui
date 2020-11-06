import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InfraModule} from '../../../../infra/infra.module';
import {RouterModule, Routes} from '@angular/router';
import {CriarContaComponent} from './criar-conta/criar-conta.component';
import {LoginComponent} from './login/login.component';
import {ResetarSenhaComponent} from './resetar-senha/resetar-senha.component';
import {AccordionModule, SharedModule, ButtonModule, CardModule, InputMaskModule} from 'primeng';
import {NgSelectModule} from '@ng-select/ng-select';
import {DashboardUsuarioComponent} from './dashboard-usuario/dashboard-usuario.component';
import {AuthGuard} from "../../../../infra/security/auth-guard.service";
import {CriarSenhaComponent} from "./criar-senha/criar-senha.component";

const rotas: Routes = [
    {
        path: 'criar-conta',
        component: CriarContaComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'criar-senha/:id/:dsToken',
        component: CriarSenhaComponent
    },
    {
        path: 'resetar-senha',
        component: ResetarSenhaComponent
    },
    {
        path: 'dashboard-usuario',
        canActivate: [AuthGuard],
        component: DashboardUsuarioComponent
    }
];

@NgModule({
    declarations: [
        CriarContaComponent,
        LoginComponent,
        ResetarSenhaComponent,
        DashboardUsuarioComponent,
        CriarSenhaComponent
    ],
    imports: [
        InputMaskModule,
        NgSelectModule,
        ButtonModule,
        CardModule,
        CommonModule,
        FormsModule,
        InfraModule,
        RouterModule.forChild(rotas),
        AccordionModule,
        SharedModule
    ]
})
export class ContaUsuarioModule {

}
