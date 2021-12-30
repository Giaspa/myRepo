import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CorpoCentraleComponent } from './corpo/corpo-centrale/corpo-centrale.component';
import { CorpoSxComponent } from './corpo/corpo-sx/corpo-sx.component';
import { CorpoDxComponent } from './corpo/corpo-dx/corpo-dx.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './autenticazioni/sign-up/sign-up.component';
import { ButtonHomeComponent } from './pulsanti/button-home/button-home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { SceltaPgComponent } from './contenuti/scelta-pg/scelta-pg.component';
import { ImpostazioniUtenteComponent } from './contenuti/impostazioni-utente/impostazioni-utente.component';
import { PersonaggioComponent } from './contenuti/personaggio/personaggio.component';
import { ButtonChoiceMenuComponent } from './pulsanti/button-choice-menu/button-choice-menu.component';
import { ButtonSettingsComponent } from './pulsanti/button-settings/button-settings.component';
import { ButtonSheetComponent } from './pulsanti/button-sheet/button-sheet.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaggioFormComponent } from './contenuti/personaggio/personaggio-form/personaggio-form.component';
import { TextDotterComponent } from './contenuti/personaggio/input-custom/text-dotter/text-dotter.component';
import { ModaleComponent } from './utility/modale/modale.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CrudComponent } from './utility/crud/crud/crud.component';
import { AngularFireModule } from '@angular/fire/compat';
import { SignInComponent } from './autenticazioni/sign-in/sign-in.component';
import {MatStepperModule} from '@angular/material/stepper';

const firebaseConfig = {
  apiKey: "AIzaSyD1mxxOj0OnJzFMwVcWCv4sKos7dq2dsxQ",
  authDomain: "septsheet.firebaseapp.com",
  databaseURL: "https://septsheet-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "septsheet",
  storageBucket: "septsheet.appspot.com",
  messagingSenderId: "270593044752",
  appId: "1:270593044752:web:c9e253285282eb8427f595",
  measurementId: "G-QTLG8ZJPPP"
};

@NgModule({
  declarations: [
    AppComponent,
    CorpoCentraleComponent,
    CorpoSxComponent,
    CorpoDxComponent,
    SignUpComponent,
    ButtonHomeComponent,
    SceltaPgComponent,
    ImpostazioniUtenteComponent,
    PersonaggioComponent,
    ButtonChoiceMenuComponent,
    ButtonSettingsComponent,
    ButtonSheetComponent,
    PersonaggioFormComponent,
    TextDotterComponent,
    ModaleComponent,
    CrudComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
