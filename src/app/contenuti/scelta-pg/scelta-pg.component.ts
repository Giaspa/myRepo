import { Component, OnInit } from '@angular/core';
import { Utilities } from 'src/app/utility/utilities';
import { ImpostazioniUtenteComponent } from '../impostazioni-utente/impostazioni-utente.component';

@Component({
  selector: 'app-scelta-pg',
  templateUrl: './scelta-pg.component.html',
  styleUrls: ['./scelta-pg.component.css']
})
export class SceltaPgComponent implements OnInit {

  utente = require("../../utility/utente.json")

  constructor() { }

  ngOnInit(): void {

    console.log("UTENTE", this.utente)
  }

  getRango(rango: number){
    return Utilities.getRango(rango)
  }

}
