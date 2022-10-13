import { Component, OnInit } from '@angular/core';
//Alternativa con fichero de constantes
//import { LONGITUD_MINIMA, ESTILO_KO, ESTILO_OK  } from 'src/app/core/contantes';
//Importamos todas las constantes de la línea 3 mediante el uso de un 'selector univeral' (*)
import * as constantes from 'src/app/core/contantes';
//Alternativa de clase con atributos estáticos
import { Configuracion } from 'src/app/core/configuracion';

const CONTRASENYA_KO = "Contraseña no válida";
const CONTRASENYA_OK = "Contraseña válida";

@Component({
  selector: 'app-directivas-atributo',
  templateUrl: './directivas-atributo.component.html',
  styleUrls: ['./directivas-atributo.component.css']
})
export class DirectivasAtributoComponent implements OnInit {

  conmutador:boolean=false;
  protected password:string="";
  //protected mensaje:string=CONTRASENYA_KO;
  protected mensaje:string=CONTRASENYA_KO;
  protected estiloMensaje = constantes.ESTILO_KO;

  protected texto:string="";//Texto introducido en el input de ejemplo de ngClass

  public passwordValida:boolean=false;

  estilo = {
    color:"red",
    backgroundColor:"blue",
    fontSize:"3em"
  }

  estilosNgClass:string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  cambiar():void {
    this.conmutador=!this.conmutador;
    this.estilo.color = this.conmutador ? "yellow" : "red";
  }

  validar():void {
    this.estiloMensaje =  this.isContrasenyaNoValida() ? constantes.ESTILO_KO : constantes.ESTILO_OK;
    this.mensaje = this.isContrasenyaNoValida() ? CONTRASENYA_KO : CONTRASENYA_OK;
  }

  isContrasenyaNoValida():boolean {
    this.passwordValida = this.password.length>=constantes.LONGITUD_MINIMA;
    return !this.passwordValida;
  }


  modificarClase():void {
    if (this.texto.length<5) {
      this.estilosNgClass.push("erroneo");
    } 
    else if (this.texto.length>=5 && this.texto.length<10) {
      this.estilosNgClass.pop();
      this.estilosNgClass.push("correcto")
    }
    else if (this.texto.length>=10) {
      this.estilosNgClass.push("resaltado")
    }
  }
}
