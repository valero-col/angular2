import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iría un empleado</p>",
  //styleUrls: ['./empleado.component.css']
  styles:["p{background-color:#0858eb11;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="juan";
  apellido="Díaz";
  //private
  edad=28;
  empresa="ACM1PT";
   
  
  constructor() { }
 /*getEdad(){
      return this.edad;
 }*/

  textoRegistro="No hay nadie registrado";

  habilitacionCuadro=false;

  URegistrado=false;

  
    getRegistroUsuario(){
      this.URegistrado=false;
    }
    
    setusuarioregistrado(event:Event){
      //alert ("El usuario se acaba de registrar");
      //this.textoRegistro="El usuario se acaba de registrar";
        if((<HTMLInputElement>event.target).value=="si"){
            this.textoRegistro="El usuario se acaba de registrar";
        }
        else{
          this.textoRegistro="No hay nadie registrado";
        }
    }

    ngOnInit(): void {
      }

    }
