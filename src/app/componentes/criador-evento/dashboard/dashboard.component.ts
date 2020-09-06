import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  display = true;

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Estatísticas',
        icon: 'pi pi-chart-line',
        routerLink: 'home'
      },
      {label: 'Gerenciar', icon: 'pi pi-cog', routerLink: 'gerenciar-evento/crud'},
      {label: 'Novo Evento', icon: 'pi pi-plus', routerLink: 'gerenciar-evento/crud/criar-evento'
      },
/*      {
        label: 'Conta',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {label: 'Save', icon: 'pi pi-fw pi-save'},
              {label: 'Update', icon: 'pi pi-fw pi-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      }*/
    ];
  }

}
