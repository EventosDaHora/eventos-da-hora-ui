import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InfraModule} from '../../../../infra/infra.module';
import {RouterModule, Routes} from '@angular/router';
import {CriarContaComponent} from './criar-conta/criar-conta.component';
import {LoginComponent} from './login/login.component';
import {ResetarSenhaComponent} from './resetar-senha/resetar-senha.component';
import {ButtonModule, CardModule, InputMaskModule} from 'primeng';
import {NgSelectModule} from '@ng-select/ng-select';

const rotas: Routes = [
  {path: 'criar-conta', component: CriarContaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'resetar-senha', component: ResetarSenhaComponent}
];

@NgModule({
  declarations: [
    CriarContaComponent,
    LoginComponent,
    ResetarSenhaComponent
  ],
  imports: [
    InputMaskModule,
    NgSelectModule,
    ButtonModule,
    CardModule,
    CommonModule,
    FormsModule,
    InfraModule,
    RouterModule.forChild(rotas)
  ]
})
export class ContaUsuarioModule {

}
