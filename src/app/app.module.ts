
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { OrdenServicioComponent } from './components/ordenes/orden-servicio/orden-servicio.component';
import { OrdenCompraComponent } from './components/ordenes/orden-compra/orden-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OrdenCompraComponent,
    OrdenServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
