import { CpasswordValidation } from './cpasswordValidation';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.css']
})
export class PasswordValidationComponent {

  //form: FormGroup

  form = new FormGroup({
    opassword: new FormControl('', Validators.required, CpasswordValidation.opasswordValidation),
    npassword: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required)
  }, CpasswordValidation.confirmValidation)

  // constructor(fb: FormBuilder){
  //   this.form = fb.group({
  //     opassword : ['', Validators.required, CpasswordValidation.opasswordValidation],
  //     npassword : ['', Validators.required],
  //     cpassword : ['', Validators.required]

  //   },{
  //     validator: CpasswordValidation.confirmValidation
  //   })
  // }

  get opassword() {
    return this.form.get('opassword')
  }
  get npassword() { 
    return this.form.get('npassword')
  }
  get cpassword(){
    return this.form.get('cpassword')
  }
}
