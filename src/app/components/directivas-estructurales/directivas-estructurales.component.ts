import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.css']
})
export class DirectivasEstructuralesComponent implements OnInit {

  protected existe:boolean=true;
  protected diasLaborables:string[]=['Lunes','Martes','Miércoles','Jueves','Viernes'];
  protected contador=new Array(4);
  protected variableControl:string = "uno";
  constructor() { 
    setInterval(()=>{
      this.existe=!this.existe;
    },3000);
  }

  ngOnInit(): void {
  }

}
