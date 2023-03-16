import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrupoComponent } from './grupo/grupo.component';
import { GrupoListaComponent } from './grupo/grupo-lista/grupo-lista.component';
import { GrupoCreateComponent } from './grupo/grupo-create/grupo-create.component';
import { AlarmaComponent } from './alarma/alarma.component';
import { AlarmaListaComponent } from './alarma/alarma-lista/alarma-lista.component';
import { AlarmaCreateComponent } from './alarma/alarma-create/alarma-create.component';


@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    GrupoListaComponent,
    GrupoCreateComponent,
    AlarmaComponent,
    AlarmaListaComponent,
    AlarmaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
