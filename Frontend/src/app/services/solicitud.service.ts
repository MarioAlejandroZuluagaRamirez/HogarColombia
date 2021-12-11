import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}


