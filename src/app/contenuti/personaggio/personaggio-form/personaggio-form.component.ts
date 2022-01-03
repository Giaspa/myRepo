import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Root } from 'src/app/service/root.model';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-personaggio-form',
  templateUrl: './personaggio-form.component.html',
  styleUrls: ['./personaggio-form.component.css']
})
export class PersonaggioFormComponent implements OnInit {

  infoPgFormGroup!: FormGroup;
  attributsFormGroup!: FormGroup;
  abilitiesFormGroup!: FormGroup;
  backgroundsFormGroup!: FormGroup;
  fgvFormGroup!: FormGroup;

  stepperOrientation!: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private service: TestService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.infoPgFormGroup = this._formBuilder.group({
      pgId: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      rango: ['', Validators.required],
      razza: ['', Validators.required],
      auspicio: ['', Validators.required],
      tribu: [''],
      branco: [''],
      totemBranco: [''],
      profilo: ['', Validators.required],
    });
    this.attributsFormGroup = this._formBuilder.group({
      forza: [1, Validators.required],
      destrezza: [1, Validators.required],
      costituzione: [1, Validators.required],
      carisma: [1, Validators.required],
      persuasione: [1, Validators.required],
      aspetto: [1, Validators.required],
      intelligenza: [1, Validators.required],
      percezione: [1, Validators.required],
      prontezza: [1, Validators.required],
    });
    this.abilitiesFormGroup = this._formBuilder.group({
      atletica: [0],
      autorita: [0],
      bassifondi: [0],
      empatia: [0],
      espressivita: [0],
      intimidire: [0],
      istintoPrimordiale: [0],
      rissa: [0],
      sestoSenso: [0],
      sotterfugio: [0],
      affinitaAnimale: [0],
      arceria: [0],
      armiDaMischia: [0],
      cavalcare: [0],
      criminalita: [0],
      espressioneArtistica: [0],
      furtivita: [0],
      galateo: [0],
      manualita: [0],
      sopravvivenza: [0],
      accademiche: [0],
      enigmi: [0],
      investigare: [0],
      legge: [0],
      linguistica: [0],
      medicina: [0],
      occulto: [0],
      rituali: [0],
      saggezzaDellaTerra: [0],
      scienza: [0]
    });
    this.backgroundsFormGroup = this._formBuilder.group({
      alleati: [0],
      antenati: [0],
      contatti: [0],
      destino: [0],
      feticci: [0],
      kinfolk: [0],
      mentore: [0],
      networkSpirituale: [0],
      numeTutelare: [0],
      pesoPolitico: [0],
      razzaPura: [0],
      retaggioSpirituale: [0],
      risorse: [0],
      riti: [0],
      territorioDiCaccia: [0],
      toccatoDalWyld: [0],
      toccatoDallaWeaver: [0],
      toccatoDalWyrm: [0],
      totem: [0]
    });
    this.fgvFormGroup = this._formBuilder.group({
      furia: [1],
      gnosi: [1],
      volonta: [1],
    });

    this.getPgId();
  }

  getPgId() {
    this.service.getPersonaggiList(Root.getSessionUser().id).subscribe(characters => {
      //@ts-ignore
      var charactersKeysArray = Object.keys(characters)
      var incrementedId = +charactersKeysArray[charactersKeysArray.length-1] + 2
      this.infoPgFormGroup.patchValue({
        pgId: incrementedId
      })
    })
  }

  scrollToTop(event: any) {
    console.log(event)
    event.view.scrollTo(200, 0);
  }

  submitPgCreation() {
    var pgEntity: {} = {}

    for (const [key, value] of Object.entries(this.infoPgFormGroup.value)) {
      if (key == 'rango') {
        //@ts-ignore
        pgEntity[key] = parseInt(value)
      } else {
        pgEntity[key] = value
      }
    };
    for (const [key, value] of Object.entries(this.attributsFormGroup.value)) {
      //@ts-ignore
      pgEntity[key] = parseInt(value)
    };
    for (const [key, value] of Object.entries(this.abilitiesFormGroup.value)) {
      //@ts-ignore
      pgEntity[key] = parseInt(value)
    };
    for (const [key, value] of Object.entries(this.backgroundsFormGroup.value)) {
      //@ts-ignore
      pgEntity[key] = parseInt(value)
    };
    for (const [key, value] of Object.entries(this.fgvFormGroup.value)) {
      //@ts-ignore
      pgEntity[key] = parseInt(value)
    };

    //@ts-ignore
    this.service.setPg(Root.getSessionUser().id, pgEntity.pgId, pgEntity)
    Root.setSessionPg(pgEntity)
    this.router.navigate(['/sheet']);
  }
}
