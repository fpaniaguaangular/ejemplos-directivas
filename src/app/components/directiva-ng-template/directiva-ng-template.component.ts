import { Component, OnInit } from '@angular/core';
import { CopiapegaComponent } from '../copiapega/copiapega.component';
import { Copiapega2Component } from '../copiapega2/copiapega2.component';

@Component({
  selector: 'app-directiva-ng-template',
  templateUrl: './directiva-ng-template.component.html',
  styleUrls: ['./directiva-ng-template.component.css']
})
export class DirectivaNgTemplateComponent implements OnInit {

  componenteCopiaYPega:any = null;

  constructor() { 
    setTimeout(()=>{
      this.componenteCopiaYPega = CopiapegaComponent;
    },3000);
    setTimeout(()=>{
      this.componenteCopiaYPega = Copiapega2Component;
    },6000);
  }

  ngOnInit(): void {
  }

}
