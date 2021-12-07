import { Component, OnInit } from '@angular/core';
import { ModeloInmueble } from 'src/app/models/inmueble.modelo';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listaInmuebles: ModeloInmueble[]= [];
  constructor(private inmuebleServico: InmuebleService) { }

  ngOnInit(): void {
    this.obtenerListadoInmuebles();
  }

  obtenerListadoInmuebles(){
    this.inmuebleServico.obtenerInmuebles().subscribe((datos: ModeloInmueble[])=>{
      this.listaInmuebles = datos;
    })
  }
}
