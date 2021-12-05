
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdenCompraComponent } from './components/ordenes/orden-compra/orden-compra.component';
import { OrdenServicioComponent } from './components/ordenes/orden-servicio/orden-servicio.component';

const routes: Routes = [
  {path:'', redirectTo: 'login',  pathMatch: 'full'},
  {path:'login', component: LoginComponent },
  {path:'oServicio', component: OrdenServicioComponent },
  {path:'oCompra', component: OrdenCompraComponent },
  {path:'home', component: HomeComponent },
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
