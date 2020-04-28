import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() estudianteCreada = new EventEmitter<Estudiante>();

  codigo: number;
  nombre: string;
  apellido: string;
  nota: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAgregarEstudiante(){
    let estudiante = new Estudiante(this.codigo, this.nombre, this.apellido, this.nota);
    this.estudianteCreada.emit(estudiante);
  }

}
