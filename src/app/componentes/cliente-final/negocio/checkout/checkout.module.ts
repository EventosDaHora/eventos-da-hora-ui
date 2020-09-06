import {NgModule} from '@angular/core';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {FinalizarPedidoComponent} from './finalizar-pedido/finalizar-pedido.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InfraModule} from '../../../../infra/infra.module';
import {RouterModule, Routes} from '@angular/router';
import {EscolhaIngressoComponent} from './evento/escolha-ingresso/escolha-ingresso.component';
import {EventoComponent} from './evento/main/evento.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {AccordionModule, ButtonModule, CardModule, RadioButtonModule} from 'primeng';
import {ViewModule} from '../../view/view.module';
import {EventosCategoriaComponent} from '../../view/eventos-categoria/eventos-categoria.component';


const rotas: Routes = [
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'evento', component: EventoComponent},
  {path: 'finalizar-pedido', component: FinalizarPedidoComponent},
  {path: 'listagem-eventos', component: EventosCategoriaComponent}
];

@NgModule({
  declarations: [
    CarrinhoComponent,
    FinalizarPedidoComponent,
    EscolhaIngressoComponent,
    EventoComponent
  ],
    imports: [
        NgSelectModule,
        AccordionModule,
        RadioButtonModule,
        ButtonModule,
        ViewModule,
        CommonModule,
        FormsModule,
        InfraModule,
        RouterModule.forChild(rotas),
        CardModule
    ]
})
export class CheckoutModule {
}
