import { Component, OnInit } from '@angular/core';
import { ModeloInmueble } from 'src/app/models/inmueble.modelo';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { ModeloCiudad } from 'src/app/models/ciudad.modelo';
import { ModeloTipoInmueble } from 'src/app/models/tipoInmueble.modelo';
import { SecurityService } from 'src/app/services/security.service';
import { ModeloUser } from 'src/app/models/user.modelo';
import { ModeloWhoAmI } from 'src/app/models/whoAmI.modelo';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listaInmuebles: ModeloInmueble[] = [];
  idUsuario?: string = "";
  constructor(private inmuebleServico: InmuebleService, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.obtenerListadoInmuebles();
  }

  obtenerListadoInmuebles() {
    this.inmuebleServico.obtenerInmueblesFiltro("Activo").subscribe((datos: ModeloInmueble[]) => {
      this.listaInmuebles = datos;
      if (this.listaInmuebles != null) {
          for (let item of this.listaInmuebles) {
            this.inmuebleServico.obtenerTipoInmueble(item.id).subscribe((tipo: ModeloTipoInmueble) => {
              item.tipoInmuebleId = tipo.nombre;
            });
            this.inmuebleServico.obtenerCiudad(item.id).subscribe((tipo: ModeloCiudad) => {
              item.ciudadId = tipo.nombre;
            });
          }
      }
    })
    
  }

  solicitar(id: string | undefined){
    
    this.securityService.whoAmI().subscribe((datos:any)=>{
      alert(datos)
    },(error: any)=>{
      alert(error.message)
    });

  }
}
