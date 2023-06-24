import { Component } from '@angular/core';

@Component({
  selector: 'app-pfc',
  templateUrl: './pfc.component.html',
  styleUrls: ['./pfc.component.css']
})
export class PfcComponent {

  mainBot : number | undefined
  resultat : string | undefined
  nbPie : number = 0
  nbFeu : number = 0
  nbCis : number = 0
  afficherStat : boolean = false
  nbVic : number = 0
  nbEga : number = 0
  nbDef : number = 0

  game(mainPlay : string){
    
    this.mainBot = Math.floor(Math.random()*3).valueOf()
    console.log(this.mainBot)
    // 1 = pierre, 2 = feuille, 0 = ciseaux
    if(mainPlay == "p" && this.mainBot == 1 || mainPlay == "f" && this.mainBot == 2 || mainPlay == "c" && this.mainBot == 0){
      this.resultat = "Egalité"
      this.nbEga += 1
    } else if (mainPlay == "p" && this.mainBot == 0 || mainPlay == "f" && this.mainBot == 1 || mainPlay == "c" && this.mainBot == 2){
      this.resultat = "Victoire"
      this.nbVic += 1
    } else {
      this.resultat = "Défaite (gros nulos)"
      this.nbDef += 1
    }

    if(this.mainBot == 1){
      this.nbPie += 1
    } else if (this.mainBot == 2){
      this.nbFeu += 1
    } else {
      this.nbCis += 1
    }
  }

  stat(){
    console.log(`nb de Pierre : ${this.nbPie}, nb de Feuille : ${this.nbFeu}, nb de Ciseaux : ${this.nbCis}`)
    this.afficherStat = !this.afficherStat
  }
}
