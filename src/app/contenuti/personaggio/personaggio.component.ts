import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Root } from 'src/app/service/root.model';
import { TestService } from 'src/app/service/test.service';
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

  constructor(private testService: TestService) { }

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


  //TEST
  testDB() {
    // this.testService.test().subscribe(res => {
    //   console.log("TEST", res)
    // })

    var userId = 2;
    var pgId = 1;
    var email = "aaa@gmail.com"

    this.testService.getUserByEmail(email).subscribe(res => {
      if (res) {
        window.alert("E-mail già registrata!")
      } else {
        this.testService.getUsersList().subscribe(users => {
          //@ts-ignore
          var usersKeysArray = Object.keys(users)
          var incrementedId = +usersKeysArray[usersKeysArray.length - 1] + 1
          console.log("users", incrementedId)
          var user = {
            "id": incrementedId,
            "nome": "Pippo",
            "cognome": "Spadazzi",
            "email": email,
            "password": "admin_123",
            "login": email + '_' + 'admin_123'
          }
          // this.testService.setUser(user.id, user)
        })
      }
    })
    // this.testService.setUser(userId, Root.userEntity(userId))
    // this.testService.setPg(userId, pgId, Root.pgEntity(pgId))
    // this.testService.updatePgAttribute(userId, pgId, 'forza', 5);
    // this.testService.updatePgAbility(userId, pgId, 'arceria', 5);
    // this.testService.updatePgBackground(userId, pgId, 'riti', 5);
    // this.testService.updatePgFGV(userId, pgId, 'furia', 4);

    // var email = 'admin.admin@gmail.com';
    // var password = 'admin_123';

    // //------------------LOGIN------------------
    // this.testService.getLogin(email, password).subscribe(res => {
    //   //@ts-ignore
    //   var userKey = Object.keys(res)[0];
    //   //@ts-ignore
    //   var user = res[userKey].auth;
    //   console.log("utente loggato", user)
    // })

    // this.testService.getUsersList().subscribe(res =>
    //   console.log("lista utenti", res)
    // );
    // this.testService.getUser(userId).subscribe(res =>
    //   console.log("utente", res)
    // );
    // this.testService.getPersonaggiList(userId).subscribe(res =>
    //   console.log("lista personaggi", res)
    // );
    // this.testService.getPersonaggio(userId, pgId).subscribe(res =>
    //   console.log("personaggio", res)
    // );

    // var giftId = 2;
    // var dono = "Parlare con gli spiriti"
    // var link = null;
    // this.testService.setGift(userId, pgId, giftId, Root.giftEntity(giftId, dono, link));
    // var meritId = 2;
    // var nome = "Leader nato"
    // var note = "+2 dadi a tiri Autorità";
    // this.testService.setMerit(userId, pgId, meritId, Root.meritEntity(meritId, nome, note));
    // var flawId = 1;
    // var nome = "Tracce di corruzione"
    // var note = "I doni di percezione del Wyrm riconosco il PG come un Nemico. L'atteggiamento dei Licantropi può essere ostile nei suoi confronti.";
    // this.testService.setFlaw(userId, pgId, flawId, Root.flawEntity(flawId, nome, note));
    // var scarId = 1;
    // var nome = "Ustione su viso e braccio"
    // var note = "Quando la temperatura è bassa, fa male...";
    // this.testService.setScar(userId, pgId, scarId, Root.scarEntity(scarId, nome, note));
    // var equipId = 1;
    // var item = "Klaive Dedalea"
    // var note = "For+3, CD 6; Gnosi 7: +1 Danni Aggravati e +2 tiri Sociali";
    // this.testService.setEquip(userId, pgId, equipId, Root.equipEntity(equipId, item, note));
    // this.testService.updatePgBio(userId, pgId, 'rango', 4);
    // this.testService.updateUserAuth(userId, 'cognome', 'Spadazzi');
    // this.testService.deleteGift(userId, pgId, 1)

  }


}
