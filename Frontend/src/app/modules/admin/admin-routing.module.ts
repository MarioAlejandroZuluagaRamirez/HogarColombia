import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDptoComponent } from './actualizar-dpto/actualizar-dpto.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { NuevoAsesorComponent } from './nuevo-asesor/nuevo-asesor.component';
import { NuevoDeptoComponent } from './nuevo-depto/nuevo-depto.component';

const routes: Routes = [
  {
    path: 'actualizar-dpto',
    component: ActualizarDptoComponent 
  },
  {
    path: 'asesores',
    component: AsesoresComponent 
  },
  {
    path: 'ciudades',
    component: CiudadesComponent 
  },
  {
    path: 'departamentos',
    component: DepartamentosComponent 
  },
  {
    path: 'nuevo-asesor',
    component: NuevoAsesorComponent 
  },
  {
    path: 'nuevo-depto',
    component: NuevoDeptoComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
