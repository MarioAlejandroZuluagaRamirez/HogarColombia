import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  fgValidatorNewSolicitud: FormGroup = this.fbNewSolicitud.group({
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'tipodocumento': ['',[Validators.required]],
    'documento': ['',[Validators.required]],
    'email': ['',[Validators.required,Validators.email]],
    'telefono': ['',[Validators.required]],
    'password': ['',[Validators.required]], 
    'password2': ['',[Validators.required]]
  });
  constructor(private fbNewSolicitud: FormBuilder) { }

  ngOnInit(): void {
  }

  newSolicitud(){

  }
}
