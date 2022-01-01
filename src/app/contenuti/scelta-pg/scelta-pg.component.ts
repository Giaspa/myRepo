import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root } from 'src/app/service/root.model';
import { TestService } from 'src/app/service/test.service';
import { Utilities } from 'src/app/utility/utilities';
import { ImpostazioniUtenteComponent } from '../impostazioni-utente/impostazioni-utente.component';

@Component({
  selector: 'app-scelta-pg',
  templateUrl: './scelta-pg.component.html',
  styleUrls: ['./scelta-pg.component.css']
})
export class SceltaPgComponent implements OnInit {

  utente = require("../../utility/utente.json")
  personaggi: any;

  constructor(private service: TestService, private router: Router) {
    service.getPersonaggiList(Root.getSessionUser().id).subscribe(personaggi => {
      this.personaggi = personaggi
    })
   }

  ngOnInit(): void {

  }

  getRango(rango: number){
    return Utilities.getRango(rango)
  }

  loadPg(pg: any){
    Root.setSessionPg(pg);
    this.router.navigate(['/sheet/'+pg.pgId]);
  }

}
