import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { NuevoDeptoComponent } from './nuevo-depto/nuevo-depto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarDptoComponent } from './actualizar-dpto/actualizar-dpto.component';
import { NuevoAsesorComponent } from './nuevo-asesor/nuevo-asesor.component';


@NgModule({
  declarations: [
    AsesoresComponent,
    CiudadesComponent,
    DepartamentosComponent,
    NuevoDeptoComponent,
    ActualizarDptoComponent,
    NuevoAsesorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
