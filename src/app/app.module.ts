import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadosService } from './dados.service';
import { ImpressaoComponent } from './impressao/impressao.component'
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    ImpressaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ DadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
