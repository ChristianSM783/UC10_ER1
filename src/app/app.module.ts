import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { DempagComponent } from './views/dempag/dempag.component';
import { Pag1Component } from './views/pag1/pag1.component';
import { Pag2Component } from './views/pag2/pag2.component';
import { Pag3Component } from './views/pag3/pag3.component';
import { Pag4Component } from './views/pag4/pag4.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    JogadorComponent,
    HomeComponent,
    HeaderComponent,
    DempagComponent,
    Pag1Component,
    Pag2Component,
    Pag3Component,
    Pag4Component,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
