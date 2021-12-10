import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/models/identificar.modelo';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  SesionIniciada: boolean = false;
  subs: Subscription = new Subscription();
  rol: string = '';
  SesionCliente: boolean = false;
  constructor(private seguridadServicio: SecurityService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.SesionIniciada = datos.identificado;
      this.rol = this.seguridadServicio.rol;
      if(this.rol == 'Client'){
        this.SesionCliente = true;  
    }
    });
  }
}
