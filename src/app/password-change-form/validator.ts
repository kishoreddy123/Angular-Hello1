import { AbstractControl, ValidationErrors } from '@angular/forms';

export class validator {
    
  static  oldPasswordValidation(control: AbstractControl) : Promise<ValidationErrors|null>{
        return new Promise((resolve, reject) => {
            if(control.value !== '1234')
                resolve({oldPasswordValidation: true})
            else
                resolve(null);
        })
    }
  static  PasswordConfirmValidation(control: AbstractControl) {
        let newPassword = control.get('npassword');
        let confirmPassword = control.get('cpassword');
        if (newPassword.value !== confirmPassword.value)
            return { PasswordConfirmValidation: true };
        return null;
    }
 
}