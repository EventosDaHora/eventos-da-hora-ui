import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
   {
     path: '',
     loadChildren: () => import('./componentes/cliente-final/view/view.module')
       .then(m => m.ViewModule)
   },
  {
    path: 'conta',
    loadChildren: () => import('./componentes/cliente-final/negocio/conta-usuario/conta-usuario.module')
      .then(m => m.ContaUsuarioModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./componentes/cliente-final/negocio/checkout/checkout.module')
      .then(m => m.CheckoutModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./componentes/criador-evento/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
