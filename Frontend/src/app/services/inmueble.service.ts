import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCiudad } from '../models/ciudad.modelo';
import { ModeloInmueble } from '../models/inmueble.modelo';
import { ModeloTipoInmueble } from '../models/tipoInmueble.modelo';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  url = 'http://localhost:3000'
  token: string = '';



  constructor(private http: HttpClient, private seguridadServicio: SecurityService ) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  obtenerInmueblesFiltro(estado: string): Observable<ModeloInmueble[]>{
    return this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles?filter={"where":{"estado":"${estado}"}}`)
  }
  obtenerInmueblesTodos(): Observable<ModeloInmueble[]>{
    return this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles`)
  }
  
  obtenerTipoInmueble(id: string | undefined): Observable<ModeloTipoInmueble>{
    return this.http.get<ModeloTipoInmueble>(`${this.url}/inmuebles/${id}/tipo-inmueble`)
  }

  obtenerCiudad(id: string | undefined): Observable<ModeloCiudad>{
      return this.http.get<ModeloCiudad>(`${this.url}/inmuebles/${id}/ciudad`)
  }

}