import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VeterinariaComponent } from './Components/veterinaria/veterinaria.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { MascotaComponent } from './Components/mascota/mascota.component';
import { MenuveterinariaComponent } from './Components/menuveterinaria/menuveterinaria.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinariaComponent,
    ClienteComponent,
    ProveedorComponent,
    MascotaComponent,
    MenuveterinariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
