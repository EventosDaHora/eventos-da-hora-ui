import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {CardEventoComponent} from './card-evento/card-evento.component';
import {IndexComponent} from './index/index.component';
import {AutoCompleteModule, ButtonModule, CalendarModule, CardModule, CarouselModule, DropdownModule, InputTextModule} from 'primeng';
import {InfraModule} from '../../../infra/infra.module';
import {FlexModule} from '@angular/flex-layout';
import {FiltroEventoComponent} from './filtro-evento/filtro-evento.component';
import { EventosCategoriaComponent } from './eventos-categoria/eventos-categoria.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { IndicadorFiltroComponent } from './filtro-evento/indicador-filtro/indicador-filtro.component';
import {DataViewModule} from 'primeng/dataview';

const rotas: Routes = [
  {path: '', component: IndexComponent},
  {path: 'eventos-categoria', component: EventosCategoriaComponent}

];

// @ts-ignore
@NgModule({
  declarations: [
    BannerComponent,
    CardEventoComponent,
    IndexComponent,
    FiltroEventoComponent,
    EventosCategoriaComponent,
    IndicadorFiltroComponent,
  ],
  imports: [
    CarouselModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    CheckboxModule,
    InfraModule,
    FlexModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(rotas),
    CalendarModule,
    DropdownModule,
    CardModule,
    DataViewModule
  ],
  exports: [IndexComponent, BannerComponent]
})
// @ts-ignore
export class ViewModule {

}
