import { Component } from '@angular/core';
import { Estudiante } from './estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Bienvenido, esta son las notas del estudiante: ';
  nota = number;
  estudiantes: Estudiante [ ] = [ new Estudiante (1, ' Diego', ' Ramirez', 3.5),
  new Estudiante (1, ' Diego', ' Ramirez', 2.5), new Estudiante (1, ' Diego', ' Ramirez', 5)];

  estudiante: Estudiante;

  observacion = 'hola';


  validarNota():boolean{
      if(this.nota <3){
        this.observacion = 'perdio';
        return false;

      }else{
        this.observacion ='gano';

        return true;
      }

  }


}
