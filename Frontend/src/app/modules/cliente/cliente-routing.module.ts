import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarInmuebleComponent } from './buscar-inmueble/buscar-inmueble.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';

const routes: Routes = [
  {
    path: 'buscar-inmueble',
    component: BuscarInmuebleComponent
  },
  {
    path: 'listar-inmuebles',
    component: BuscarInmuebleComponent
  },
  {
    path: 'crear-solicitud',
    component: CrearSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
