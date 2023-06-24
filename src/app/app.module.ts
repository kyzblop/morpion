import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PfcComponent } from './Jeux/pfc/pfc.component';
import { MorpComponent } from './Jeux/morp/morp.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponent,
    MorpComponent,
    PfcComponent,
    MorpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
