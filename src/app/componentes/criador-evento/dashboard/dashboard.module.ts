import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule, CardModule, ChartModule, InputTextModule, ProgressBarModule} from 'primeng';
import {CrudEventoModule} from '../crud-evento/crud-evento.module';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DashboardComponent} from './dashboard.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {CardAnalyticsComponent} from './card-analytics/card-analytics.component';
import {CalendarioEventosComponent} from './calendario-eventos/calendario-eventos.component';
import {TotalizacaoComponent} from './totalizacao/totalizacao.component';
import { DescricaoEventoComponent } from './descricao-evento/descricao-evento.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    CardAnalyticsComponent,
    TotalizacaoComponent,
    CalendarioEventosComponent,
    DescricaoEventoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CrudEventoModule,
    ProgressBarModule,
    ChartModule,
    FullCalendarModule
  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
