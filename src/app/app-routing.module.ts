import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PfcComponent } from './Jeux/pfc/pfc.component';
import { MorpComponent } from './Jeux/morp/morp.component';


const routes: Routes = [
  {path:"jeux/morp", component:MorpComponent},
  {path:"jeux/pfc", component:PfcComponent},
  {path:"", component:AccueilComponent},
  {path:"**", component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
