import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SheetDataSet } from 'src/app/model/sheetDataSet.model';
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

  userId = Root.getSessionUser().id;
  pgId = Root.getSessionPg().pgId;

  openedPanel: string = sessionStorage.getItem('openedPanel') || "Attributi";

  giftFormGroup!: FormGroup;
  equipFormGroup!: FormGroup;
  meritFormGroup!: FormGroup;
  flawFormGroup!: FormGroup;
  scarFormGroup!: FormGroup;

  dsFisici: SheetDataSet[] = Root.characterAttrFisici;
  dsSociali: SheetDataSet[] = Root.characterAttrSociali;
  dsMentali: SheetDataSet[] = Root.characterAttrMentali;
  dsFGV: SheetDataSet[] = Root.characterFGV;
  dsAttitudini: SheetDataSet[] = Root.characterAbilAttitudini;
  dsCapacita: SheetDataSet[] = Root.characterAbilCapacita;
  dsConoscenze: SheetDataSet[] = Root.characterAbilConoscenze;
  dtBackground: SheetDataSet[] = Root.characterBackgrounds;
  dtBio: SheetDataSet[] = Root.characterBio;

  constructor(
    private testService: TestService,
    private _formBuilder: FormBuilder,
    private router: Router) {
    Root.getSessionPg() ? this.personaggio = Root.getSessionPg() : null;

  }

  ngOnInit(): void {
    this.giftFormGroup = this._formBuilder.group({
      id: ['', []],
      dono: ['', [Validators.required]],
      link: ['', []]
    })
    this.equipFormGroup = this._formBuilder.group({
      id: ['', []],
      item: ['', [Validators.required]],
      note: ['', []]
    })
    this.meritFormGroup = this._formBuilder.group({
      id: ['', []],
      nome: ['', [Validators.required]],
      note: ['', []]
    })
    this.flawFormGroup = this._formBuilder.group({
      id: ['', []],
      nome: ['', [Validators.required]],
      note: ['', []]
    })
    this.scarFormGroup = this._formBuilder.group({
      id: ['', []],
      nome: ['', [Validators.required]],
      note: ['', []]
    })
  }

  /**
   * Passandogli un numero da 0 a 6 restituisce la stringa relativa al nome del rango corrispondente
   * @param rango il numero del rango di cui ottenere il nome
   */
  getRango(rango: number) {
    return Utilities.getRango(rango)
  }

  /**
   * Clickando sulla PULSANTIERA, apre il Pannello relativo
   * @param pannello il nome del pannello da aprire
   */
  setPanelOpen(pannello: string) {
    this.openedPanel = pannello;
    sessionStorage.setItem('openedPanel', pannello);
  }

  /**
   * Torna l'ultimo ID utile di una qualità tra: Doni | Equipaggiamento | Pregi | Difetti | Cicatrici
   * @param rootQuality passargli una costante di Root.model.ts tra: DONI | EQUIP | MERITS | FLAWS | SCAR
   */
  getLastQualityId(rootQuality: Root) {
    var qualityList: [] = [];
    var id: number | undefined = 0;
    switch (rootQuality) {
      case Root.DONI:
        qualityList = this.personaggio.doni;
        break;
      case Root.EQUIP:
        qualityList = this.personaggio.equipaggiamento;
        break;
      case Root.MERITS:
        qualityList = this.personaggio.pregi;
        break;
      case Root.FLAWS:
        qualityList = this.personaggio.difetti;
        break;
      case Root.SCAR:
        qualityList = this.personaggio.cicatriciDaBattaglia;
        break;
    }

    if (Utilities.getFirstEmptyId(qualityList) || Utilities.getFirstEmptyId(qualityList) == 0) {
      console.log("Utilities.getFirstEmptyId(qualityList)", Utilities.getFirstEmptyId(qualityList))
      return id = Utilities.getFirstEmptyId(qualityList);
    } else {
      console.log("qualityList ? qualityList.length : 0", qualityList ? qualityList.length : 0)
      return qualityList ? qualityList.length : 0;
    }
  }

  /**
   * Ricarica in sessione il personaggio
   * @param userId l'ID dell'User in sessione
   * @param pgId l'ID del Character in sessione
   */
  recargePg(userId: any, pgId: any) {
    this.testService.getPersonaggio(userId, pgId).subscribe(pg => {
      Root.setSessionPg(pg)
      this.personaggio = Root.getSessionPg();
      location.reload();
    });
  }

  sortDataset(dataSet: [], sortCriteria: any): [] {
    var sortedDataSet: [] = [];
    //@ts-ignore
    sortedDataSet = dataSet.sort((x, y) => {
      if (x && y && x[sortCriteria] && y[sortCriteria]) {
        if (x[sortCriteria] < y[sortCriteria]) {
          return -1;
        }
        if (x[sortCriteria] > y[sortCriteria]) {
          return 1;
        }
      }
      return 0
    })
    return sortedDataSet;
  }

  //EQUIPAGGIAMENTO-------------------------------------------------------------
  itemAdd(event: any) {
    const newEquipId = this.personaggio.equipaggiamento ? this.getLastQualityId(Root.EQUIP) : 0;
    console.log("ID NUOVO equip", newEquipId)

    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var newItemEntity = {
      id: newEquipId,
      item: event.item,
      note: event.note,
    }
    this.testService.setEquip(userId, pgId, newEquipId, newItemEntity);

    this.recargePg(userId, pgId)
    this.equipFormGroup.reset();
  }

  itemUpdate(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var updateItemEntity = {
      id: event.id,
      dono: event.dono,
      link: event.link,
    }
    this.testService.setEquip(userId, pgId, event.id, updateItemEntity);

    this.recargePg(userId, pgId)
    this.equipFormGroup.reset();
  }

  itemDelete(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    this.testService.deleteEquip(userId, pgId, event);

    this.recargePg(userId, pgId)
    this.equipFormGroup.reset();
  }

  //DONI------------------------------------------------------------------------
  giftAdd(event: any) {
    const newGiftId = this.personaggio.doni ? this.getLastQualityId(Root.DONI) : 0;
    console.log("ID NUOVO dono", newGiftId)
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var newGiftEntity = {
      id: newGiftId,
      dono: event.dono,
      link: event.link,
    }
    this.testService.setGift(userId, pgId, newGiftId, newGiftEntity);

    this.recargePg(userId, pgId)
    this.giftFormGroup.reset();
  }

  giftUpdate(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var updateGiftEntity = {
      id: event.id,
      dono: event.dono,
      link: event.link,
    }
    this.testService.setGift(userId, pgId, event.id, updateGiftEntity);

    this.recargePg(userId, pgId)
    this.giftFormGroup.reset();
  }

  giftDelete(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    this.testService.deleteGift(userId, pgId, event);

    this.recargePg(userId, pgId)
    this.giftFormGroup.reset();
  }

  //PREGI-----------------------------------------------------------------------
  meritAdd() {
    const newMeritId = this.personaggio.pregi ? this.getLastQualityId(Root.MERITS) : 0;
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var newMeritEntity = {
      id: newMeritId,
      nome: this.meritFormGroup.value.nome,
      note: this.meritFormGroup.value.note,
    }
    this.testService.setMerit(userId, pgId, newMeritId, newMeritEntity);

    this.recargePg(userId, pgId)
    this.meritFormGroup.reset();
  }

  meritUpdate(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var updateMeritEntity = {
      id: event.id,
      nome: event.nome,
      note: event.note,
    }
    this.testService.setMerit(userId, pgId, event.id, updateMeritEntity);

    this.recargePg(userId, pgId)
    this.meritFormGroup.reset();
  }

  meritDelete(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    this.testService.deleteMerit(userId, pgId, event);

    this.recargePg(userId, pgId)
    this.meritFormGroup.reset();
  }

  //DIFETTI--------------------------------------------------------------------
  flawAdd() {
    const newFlawId = this.personaggio.difetti ? this.getLastQualityId(Root.FLAWS) : 0;
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var newFlawEntity = {
      id: newFlawId,
      nome: this.flawFormGroup.value.nome,
      note: this.flawFormGroup.value.note,
    }
    this.testService.setFlaw(userId, pgId, newFlawId, newFlawEntity);

    this.recargePg(userId, pgId)
    this.flawFormGroup.reset();
  }

  flawUpdate(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var updateFlawEntity = {
      id: event.id,
      nome: event.nome,
      note: event.note,
    }
    this.testService.setFlaw(userId, pgId, event.id, updateFlawEntity);

    this.recargePg(userId, pgId)
    this.flawFormGroup.reset();
  }

  flawDelete(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    this.testService.deleteFlaw(userId, pgId, event);

    this.recargePg(userId, pgId)
    this.flawFormGroup.reset();
  }

  //CICATRICI DA BATTAGLIA----------------------------------------------------
  scarAdd() {
    const newScarId = this.personaggio.cicatriciDaBattaglia ? this.getLastQualityId(Root.SCAR) : 0;
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var newScarEntity = {
      id: newScarId,
      nome: this.scarFormGroup.value.nome,
      note: this.scarFormGroup.value.note,
    }
    this.testService.setScar(userId, pgId, newScarId, newScarEntity);

    this.recargePg(userId, pgId)
    this.scarFormGroup.reset();
  }

  scarUpdate(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    var updateScarEntity = {
      id: event.id,
      nome: event.nome,
      note: event.note,
    }
    this.testService.setScar(userId, pgId, event.id, updateScarEntity);

    this.recargePg(userId, pgId)
    this.scarFormGroup.reset();
  }

  scarDelete(event: any) {
    const userId = Root.getSessionUser().id;
    const pgId = Root.getSessionPg().pgId

    this.testService.deleteScar(userId, pgId, event);

    this.recargePg(userId, pgId)
    this.scarFormGroup.reset();
  }

  //QUALITY-------------------------------------------------------------------
  updateQuality(event: any, quality: string) {
    // const userId = Root.getSessionUser().id;
    // const pgId = this.personaggio.pgId;

    for (const [key, value] of Object.entries(event)) {
      switch (quality) {
        case 'attributi':
          //@ts-ignore
          this.testService.updatePgAttribute(this.userId, this.pgId, key, +value)
          break;
        case 'abilità':
          //@ts-ignore
          this.testService.updatePgAbility(this.userId, this.pgId, key, +value)
          break;
        case 'background':
          //@ts-ignore
          this.testService.updatePgBackground(this.userId, this.pgId, key, +value)
          break;
        case 'FGV':
          //@ts-ignore
          this.testService.updatePgFGV(this.userId, this.pgId, key, +value)
          break;
        case 'pgBio':
          this.testService.updatePgBio(this.userId, this.pgId, key, value)
          break;
      }
    }

    this.recargePg(this.userId, this.pgId)
  }

  //TEST----------------------------------------------------
  testDB() {
    // this.testService.test().subscribe(res => {
    //   console.log("TEST", res)
    // })

    var userId = Root.getSessionUser().id;
    var pgId = 1;
    var email = "aaa@gmail.com"

    // this.testService.getUserByEmail(email).subscribe(res => {
    //   if (res) {
    //     window.alert("E-mail già registrata!")
    //   } else {
    //     this.testService.getUsersList().subscribe(users => {
    //       //@ts-ignore
    //       var usersKeysArray = Object.keys(users)
    //       var incrementedId = +usersKeysArray[usersKeysArray.length - 1] + 1
    //       console.log("users", incrementedId)
    //       var user = {
    //         "id": incrementedId,
    //         "nome": "Pippo",
    //         "cognome": "Spadazzi",
    //         "email": email,
    //         "password": "admin_123",
    //         "login": email + '_' + 'admin_123'
    //       }
    //       // this.testService.setUser(user.id, user)
    //     })
    //   }
    // })
    // this.testService.setUser(userId, Root.userEntity(userId))
    // this.testService.setPg(userId, pgId, Root.pgEntity(pgId))
    // this.testService.updatePgAttribute(userId, pgId, 'forza', 5);
    // this.testService.updatePgAbility(userId, pgId, 'arceria', 5);
    // this.testService.updatePgBackground(userId, pgId, 'riti', 5);
    // this.testService.updatePgFGV(userId, pgId, 'furia', 4);

    // var email = 'admin.admin@gmail.com';
    // var password = 'admin_123';

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
