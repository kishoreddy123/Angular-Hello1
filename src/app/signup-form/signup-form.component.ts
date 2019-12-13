import { validation } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({ // NESTED FORM GROUP
      'username': new FormControl('', [Validators.required, validation.noSpace], validation.unique),
      'password': new FormControl('', [Validators.minLength(3), Validators.required])
    })
    
  })


  /**** With NESTED FORM GROUP ****/
  get password() {
    return this.form.get('account.password');
  }

  get username(){
    return this.form.get('account.username');
  }


  /***** WITHOUT NESTED FORM GROUP *************/
  // get password() {
  //   return this.form.get('password');
  // }
  // get username() {
  //   return this.form.get('username');
  // }
  log(e){console.log(e);
  }

  login(){
    this.form.setErrors({
      invalidLogin : true
    })
  }

}
