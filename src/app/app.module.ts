import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivasAtributoComponent } from './components/directivas-atributo/directivas-atributo.component';
import { HojaVoladoraComponent } from './components/hoja-voladora/hoja-voladora.component';
import { DirectivasEstructuralesComponent } from './components/directivas-estructurales/directivas-estructurales.component';
import { DirectivaNgTemplateComponent } from './components/directiva-ng-template/directiva-ng-template.component';
import { CopiapegaComponent } from './components/copiapega/copiapega.component';
import { Copiapega2Component } from './components/copiapega2/copiapega2.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributoComponent,
    HojaVoladoraComponent,
    DirectivasEstructuralesComponent,
    DirectivaNgTemplateComponent,
    CopiapegaComponent,
    Copiapega2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
