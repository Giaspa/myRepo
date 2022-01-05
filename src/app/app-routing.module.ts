import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './autenticazioni/sign-in/sign-in.component';
import { SignUpComponent } from './autenticazioni/sign-up/sign-up.component';
import { ImpostazioniUtenteComponent } from './contenuti/impostazioni-utente/impostazioni-utente.component';
import { PersonaggioFormComponent } from './contenuti/personaggio/personaggio-form/personaggio-form.component';
import { PersonaggioComponent } from './contenuti/personaggio/personaggio.component';
import { SceltaPgComponent } from './contenuti/scelta-pg/scelta-pg.component';
import { CorpoCentraleComponent } from './corpo/corpo-centrale/corpo-centrale.component';

const routes: Routes = [
  { path: '', component: CorpoCentraleComponent },
  { path: 'menu', component: SceltaPgComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'settings', component: ImpostazioniUtenteComponent },
  { path: 'sheet',
      children: [
        { path: "", component: PersonaggioComponent},
        { path: ":id", component: PersonaggioFormComponent},
        { path: "new", component: PersonaggioFormComponent}
      ] },
];



@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    MatCommonModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
