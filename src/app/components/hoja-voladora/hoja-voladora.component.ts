import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoja-voladora',
  templateUrl: './hoja-voladora.component.html',
  styleUrls: ['./hoja-voladora.component.css']
})
export class HojaVoladoraComponent implements OnInit {

  private yPos = -50;
  private speed;

  posicion = {
    position : "fixed",
    top: this.yPos + "px",
    left: "0px",
    width:"50px"
  };

  constructor() { 
    this.posicion.left = (Math.random() * screen.width) + "px";
    this.speed = Math.random()*0.5+0.2;
    setInterval(()=>{
      this.yPos+=this.speed;
      this.posicion.top = this.yPos+"px";
      if (this.yPos>screen.height+50){
        this.yPos=-50;
        this.posicion.left = (Math.random() * screen.width) + "px";
      }
    },10);
    
  }

  ngOnInit(): void {
  }

}
