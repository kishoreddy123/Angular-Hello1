import { AbstractControl, ValidationErrors } from '@angular/forms';

export class validation {
   static noSpace(control: AbstractControl) : ValidationErrors|null {
        if ((control.value as string).indexOf(' ') >=0) 
            return {noSpace: true}

        return null
        
    }

    static unique(control: AbstractControl) : Promise<ValidationErrors|null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'bharath') 
                    resolve({unique: true});
                else
                    resolve(null);
            },2000);

        });
    }
}