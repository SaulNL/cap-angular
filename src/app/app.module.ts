import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { FormsModule } from '@angular/forms';
import { PracticaUnoComponent } from './practica-uno/practica-uno.component';
import { ApiCommponetComponent } from './api-commponet/api-commponet.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    PracticaUnoComponent,
    ApiCommponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
