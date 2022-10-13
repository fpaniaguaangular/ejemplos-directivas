import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivasAtributoComponent } from './components/directivas-atributo/directivas-atributo.component';
import { HojaVoladoraComponent } from './components/hoja-voladora/hoja-voladora.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributoComponent,
    HojaVoladoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
