import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { MascotaComponent } from './Components/mascota/mascota.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';

const routes: Routes = [
  {
    path: 'cliente', component:ClienteComponent
  },
  {
    path: 'mascota', component:MascotaComponent
  },
  {
    path: 'proveedor', component:ProveedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
