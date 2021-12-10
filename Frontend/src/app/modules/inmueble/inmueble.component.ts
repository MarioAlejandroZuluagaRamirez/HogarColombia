import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import {ActivatedRoute, Params} from '@angular/router'
import { ModeloInmueble } from 'src/app/models/inmueble.modelo';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {

  constructor(private inmuebleService: InmuebleService, route: ActivatedRoute) { }

  private inmueble: ModeloInmueble={
    direccion: '',
    valor: 0,
    tipoOferta: '',
    nombreEncargado: '',
    contactoEncargado: '',
    estado: '',
    foto: '',
    video: '',
    ciudadId: '',
    tipoInmuebleId: '',
    asesorId: '',
  }
  ngOnInit(): void {
  }

}
