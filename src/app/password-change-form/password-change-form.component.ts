import { validator } from './validator';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent  {
  form: FormGroup;
  // form = new FormGroup({
  //   opassword: new FormControl('', Validators.required, validator.oldPasswordValidation),
  //   npassword: new FormControl('', Validators.required),
  //   cpassword: new FormControl('', Validators.required)
  // },validator.PasswordConfirmValidation)

  constructor(fb: FormBuilder){
    this.form = fb.group({
      opassword: ['',Validators.required, validator.oldPasswordValidation],
      npassword: ['',Validators.required],
      cpassword: ['',Validators.required]
    },{validate : validator.PasswordConfirmValidation});
  }


  get opassword() {
    return this.form.get('opassword');
  }
  get npassword() {
    return this.form.get('npassword');
  }
  get cpassword() {
    return this.form.get('cpassword');
  }

}
