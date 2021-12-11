import { Component, OnInit } from '@angular/core';
import { ModeloCiudad } from 'src/app/models/ciudad.modelo';
import { ModeloInmueble } from 'src/app/models/inmueble.modelo';
import { ModeloListaSolicitud } from 'src/app/models/listaSolicitud.modelo';
import { ModeloSolicitud } from 'src/app/models/solicitud.modelo';
import { ModeloTipoInmueble } from 'src/app/models/tipoInmueble.modelo';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { SecurityService } from 'src/app/services/security.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})
export class BuscarSolicitudComponent implements OnInit {
  listaSolicitudes: ModeloSolicitud[] = []
  listaCompleta: ModeloListaSolicitud[] = []
  idUsuario?: string = "";

  constructor(private solicitudService: SolicitudService, private securityService: SecurityService, private inmuebleService: InmuebleService) { }

  ngOnInit(): void {
    this.obtenerListadoSolicitudes();
  }

  obtenerListadoSolicitudes() {

    this.securityService.whoAmI().subscribe((id: any) => {
      this.idUsuario = id;
      this.solicitudService.obtenerSolicitudesUsuario(this.idUsuario).subscribe((dSolicitud: ModeloListaSolicitud[]) => {
        this.listaSolicitudes = dSolicitud;
        if (this.listaSolicitudes != null) {
          for (let i of this.listaSolicitudes) {
            let mostrarB1 = false;//Eliminar
            let mostrarB2 = false;//Descargar Contrato
            let mostrarB3 = false;//Adjuntar Contrato
            let mostrarB4 = false;//Ver comentarios
            let mostrarB5 = false;//Ver contrato

            if (i.estado === 'Enviado') { mostrarB1 = true }
            else if (i.estado === 'Aceptado') { mostrarB2 = true; mostrarB3 = true }
            else if (i.estado === 'Rechazado') { mostrarB4 = true }
            else if (i.estado === 'Alquilado' || i.estado === 'Comprado') { mostrarB5 = true }

            this.inmuebleService.obtenerInmuebleId(i.inmuebleId).subscribe((inmueble: ModeloInmueble) => {
              this.inmuebleService.obtenerCiudad(inmueble.id).subscribe((city: ModeloCiudad) => {
                this.inmuebleService.obtenerTipoInmueble(inmueble.id).subscribe((tipo: ModeloTipoInmueble) => {
                  let lista = [{
                    id: i.id,
                    foto: inmueble.foto,
                    estado: i.estado,
                    tipoOferta: inmueble.tipoOferta,
                    ciudad: city.nombre,
                    direccion: inmueble.direccion,
                    tipoInmueble: tipo.nombre,
                    valor: inmueble.valor,
                    comentarios: i.comentarios,
                    contrato: i.contrato,
                    boton1: mostrarB1,
                    boton2: mostrarB2,
                    boton3: mostrarB3,
                    boton4: mostrarB4,
                    boton5: mostrarB5
                  }]
                  this.listaCompleta.push(lista[0])
                });
              });
            });
          }
        }
      });
    });
  }
}

