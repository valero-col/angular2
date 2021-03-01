import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iría un empleado</p>",
  //styleUrls: ['./empleado.component.css']
  styles:["p{background-color:#0858eb11;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="juan"
  apellido="Díaz";
  //private
   edad=28;
  //empresa="Microsoft";
  constructor() { }
 /*getEdad(){
      return this.edad;
 }*/

  habilitacionCuadro=false;

  URegistrado=false;

    llamaEmpresa(value:String){
      
    }

    getRegistroUsuario(){
      this.URegistrado=false;




    }
    
      ngOnInit(): void {
      }

    }
