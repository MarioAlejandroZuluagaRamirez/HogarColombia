import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, InputDecorator } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from '../models/solicitud.modelo';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url = 'http://localhost:3000'
  token: string = '';
  
  constructor(private http: HttpClient, private seguridadServicio: SecurityService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  obtenerSolicitudesUsuario(id: string | undefined): Observable<ModeloSolicitud[]> {
    return this.http.get<ModeloSolicitud[]>(`${this.url}/users/${id}/solicituds`)
  }

  listaActiva(id: string | undefined, estado: string | undefined): Observable<ModeloSolicitud[]> {
    return this.http.get<ModeloSolicitud[]>(`${this.url}/users/${id}/solicituds?filter={"where":{"estado":${estado}} }`)
  }

  obtenerSolicitudId(id: string | undefined): Observable<ModeloSolicitud>{
    return this.http.get<ModeloSolicitud>(`${this.url}/solicitudes/${id}`)
  }

  eliminarSolicitud(id: string | undefined, solicitud: ModeloSolicitud): Observable<ModeloSolicitud> {
    return this.http.put<ModeloSolicitud>(`${this.url}/solicitudes/${id}`, solicitud, {
      headers: new HttpHeaders({ })
    })
  }



}


