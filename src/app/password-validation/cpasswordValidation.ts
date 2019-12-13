import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';
import { reject } from 'q';
export class CpasswordValidation {
 static opasswordValidation (control: AbstractControl) : Promise<ValidationErrors|null>{
      return new Promise((resolve, reject) => {
          if(control.value !== '1234')
            resolve ({opasswordValidation: true})
          else
            resolve(null) 
      })
     
  }
 static confirmValidation (contorl: AbstractControl) : ValidationErrors | null {
     let newpassword = contorl.get('npassword');
     let confirmpassword = contorl.get('cpassword');
     if (newpassword.value !== confirmpassword.value)
        return {confirmValidation: true}
     return null   
 }
}