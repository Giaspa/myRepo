import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  bioFormGroup!: FormGroup;
  emailFormGroup!: FormGroup;
  pwdFormGroup!: FormGroup;

  isEmailUnic: boolean = true;
  userId: number = -1;


  constructor(private _formBuilder: FormBuilder, private service: TestService) {
  }

  ngOnInit(): void {
    this.bioFormGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
    });
    this.emailFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confermaEmail: ['', [Validators.required, Validators.email, this.emailConfirmValidator.bind(this)]]
    });
    this.pwdFormGroup = this._formBuilder.group({
      password: [{ value: '', disabled: !this.isEmailUnic }, Validators.required],
      confermaPassword: [{ value: '', disabled: !this.isEmailUnic }, [Validators.required, this.pwdConfirmValidator.bind(this)]],
    });

  }

  emailConfirmValidator(control: AbstractControl): { [key: string]: boolean } | null {
    var email = this.emailFormGroup ? this.emailFormGroup.value.email : '';

    if (control.value != email) {
      return { emailConfirm: false }
    }
    return null
  }

  pwdConfirmValidator(control: AbstractControl): { [key: string]: boolean } | null {
    var pwd = this.pwdFormGroup ? this.pwdFormGroup.value.password : '';

    if (control.value != pwd) {
      return { pwdConfirm: false }
    }
    return null
  }

  verifyEmailUnicity(event: any) {
    const email = event.target.value;

    this.service.getUserByEmail(email).subscribe(res => {
      if (!res) {
        this.isEmailUnic = true
      } else {
        this.isEmailUnic = false;
        this.emailFormGroup.controls.email.setErrors({ 'invalid': true });
      }
    })
    this.emailFormGroup.controls.confermaEmail.updateValueAndValidity()
  }

  verifyPassword() {
    this.pwdFormGroup.controls.confermaPassword.updateValueAndValidity()

    this.findUserKey()
  }

  findUserKey() {
    this.service.getUsersList().subscribe(users => {
      //@ts-ignore
      var usersKeysArray = Object.keys(users)
      var incrementedId = +usersKeysArray[usersKeysArray.length - 1] + 1
      this.userId = incrementedId;
    })
  }

  submitRegistration() {
    if (this.bioFormGroup.valid && this.emailFormGroup.valid && this.pwdFormGroup.valid) {
      const user = {
        "id": this.userId,
        "nome": this.bioFormGroup.value.nome,
        "cognome": this.bioFormGroup.value.cognome,
        "email": this.emailFormGroup.value.email,
        "password": this.pwdFormGroup.value.password,
        "login": this.emailFormGroup.value.email + '_' + this.pwdFormGroup.value.password
      }

      this.service.setUser(user.id, user)
    }
  }

}
