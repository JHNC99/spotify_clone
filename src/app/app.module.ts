import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],//TODO:Declaranciones,Componentes,Directivas,Pipes
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports : [],//TODO:Exportaciones de Modulos,Componentes,Directivas,Pipes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }//TODO:Solo se importan modules 

