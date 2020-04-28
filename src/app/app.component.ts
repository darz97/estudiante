import { Component } from '@angular/core';
import { Estudiante } from './estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  titulo = 'Bienvenido';

  estudiantes: Estudiante [ ] = [
    { codigo: 1, nombre: 'Diego' , apellido: 'Ramirez', nota: 5},
    { codigo: 2, nombre: 'Diego' , apellido: 'Ramirez', nota: 4.5},
    { codigo: 3, nombre: 'Diego' , apellido: 'Ramirez', nota: 3.5},
    { codigo: 4, nombre: 'Diego' , apellido: 'Ramirez', nota: 3.0},
    { codigo: 5, nombre: 'Diego' , apellido: 'Ramirez', nota: 4.0},
    { codigo: 6, nombre: 'Diego' , apellido: 'Ramirez', nota: 2.5},
    { codigo: 7, nombre: 'Diego' , apellido: 'Ramirez', nota: 2.0},
  ];



  observacion: string;

  validarNota(nota: number): string {
      if ( nota < 3) {
        return  this.observacion = 'Reprobo';
      } else {
        return this.observacion = 'Aprobo';
      }
  }

  onEstudianteAgregada(estudiante:Estudiante){

    this.estudiantes.push(estudiante);
  }
}
