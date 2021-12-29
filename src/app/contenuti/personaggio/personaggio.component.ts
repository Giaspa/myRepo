import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModaleComponent } from 'src/app/utility/modale/modale.component';
import { Utilities } from 'src/app/utility/utilities';

@Component({
  selector: 'app-personaggio',
  templateUrl: './personaggio.component.html',
  styleUrls: ['./personaggio.component.css']
})
export class PersonaggioComponent implements OnInit {

  @ViewChild('modalDelete') modalDelete: any;
  @Input() utente: any = require("../../utility/utente.json").auth;
  @Input() personaggio: any = require("../../utility/utente.json").personaggi[0];

  openedPanel: string = "Attributi"

  constructor() { }

  ngOnInit(): void {
  }

  getRango(rango: number) {
    return Utilities.getRango(rango)
  }

  setPanelOpen(event: string) {
    // console.log("event", event)
    this.openedPanel = event;
  }

  //EQUIPAGGIAMENTo
  itemAdd() {
    window.alert("ADD dell'EQUIPAGGIAMENTO da definire")
  }

  itemUpdate(event: any) {
    console.log("EVENT", event) //torna l'ID dell'equipaggiamento da modificare, ma MANCA da capire quali sono i campi modificati

    window.alert("UPDATE del EQUIP da definire; ID = " + event)
  }

  itemDelete(event: any) {
    console.log("EVENT", event) //torna l'ID dell'equipaggiamento da eliminare

    window.alert("DELETE del EQUIP da definire; ID = " + event)
  }

  //DONI
  addGift() {
    window.alert("ADD di DONO da definire")
  }

  giftUpdate(event: any, id: number) {
    console.log("EVENT", event)
    window.alert("UPDATE del DONO da definire; ID = " + id)
  }

  giftDelete(id: number) {
    window.alert("DELETE del DONO da definire; ID = " + id)
  }

  //PREGI
  meritAdd() {
    window.alert("ADD di PREGIO da definire")
  }

  meritUpdate(event: any) {
    console.log("EVENT", event) //torna l'ID del pregio da modificare, ma MANCA da capire quali sono i campi modificati

    window.alert("UPDATE del PREGIO da definire; ID = " + event)
  }

  meritDelete(event: any) {
    console.log("EVENT", event) //torna l'ID del pregio da eliminare

    window.alert("DELETE del PREGIO da definire; ID = " + event)
  }

  //DIFETTI
  flawAdd() {
    window.alert("ADD di DIFETTO da definire")
  }

  flawUpdate(event: any) {
    console.log("EVENT", event) //torna l'ID del difetto da modificare, ma MANCA da capire quali sono i campi modificati

    window.alert("UPDATE del DIFETTO da definire; ID = " + event)
  }

  flawDelete(event: any) {
    console.log("EVENT", event) //torna l'ID del difetto da eliminare

    window.alert("DELETE del DIFETTO da definire; ID = " + event)
  }

  //CICATRICI DA BATTAGLIA
  scarAdd() {
    window.alert("ADD di CICATRICE da definire")
  }

  scarUpdate(event: any) {
    console.log("EVENT", event) //torna l'ID della cicatrice da modificare, ma MANCA da capire quali sono i campi modificati

    window.alert("UPDATE della CICATRICE da definire; ID = " + event)
  }

  scarDelete(event: any) {
    console.log("EVENT", event) //torna l'ID della cicatrice da eliminare

    window.alert("DELETE della CICATRICE da definire; ID = " + event)
  }


}
