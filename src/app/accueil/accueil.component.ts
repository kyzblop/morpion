import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(private router : Router){}

  redirectMorp(){
    this.router.navigate(["/jeux/morp"])
  }

  redirectPfc(){
    this.router.navigate(["jeux/pfc"])
  }
}
