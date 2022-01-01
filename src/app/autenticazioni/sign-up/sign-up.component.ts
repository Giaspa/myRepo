import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Root } from 'src/app/service/root.model';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginFormGroup!: FormGroup;

  isWrongCredential: boolean = false;

  constructor(private _formBuilder: FormBuilder, private service: TestService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.service.getLogin(this.loginFormGroup.value.email, this.loginFormGroup.value.password).subscribe(res => {
      if (res) {
        this.isWrongCredential=false;
        //@ts-ignore
        var userKey = Object.keys(res)[0];
        //@ts-ignore
        var user = res[userKey].auth;
        console.log("utente loggato", user)
        Root.setSessionUser(user);
        this.router.navigate(['/menu'])
      }else{
        console.log("credenziali non valide")
        this.isWrongCredential=true;
      }
    })
  }

  closeErrorTab(){
    this.loginFormGroup.reset();
    this.isWrongCredential=false;
  }
}
