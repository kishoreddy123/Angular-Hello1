import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector : 'courses',
    template : `
            <img [src] = 'imageUrl' />  
            <table>
                <tr>
                    <td attr.colspan = 'colSpan'>Hello</td>
                </tr>
            </table> 
            <button class = 'btn btn-primary'[class.active] = 'isActive'>Save</button>
            <button [style.backgroundColor]="isActive ? 'red' : 'yellow'">hello</button>
            <div (click) = 'onDivClick()'>
            <button (click) = 'onSave($event)'>onSave</button>
            </div>
            // <input [value] = 'email' (keyup.enter) = 'email = $event.target.value; onKeyUp()'/>
            <input [(ngModel)] = 'email' (keyup.enter) = 'email = $event.target.value; onKeyUp()'/>
            `
})
export class CoursesComponent {

    title = 'List of Courses'
    imageUrl = 'http://lorempixel.com/400/200'
    colSpan = 2
    isActive = true
    email = 'me@example.com'
    onSave($event) {
        $event.stopPropagation(); //Stops the Event bubbling
        console.log('onsave Clicked', $event);
        
    }
    onDivClick() {
        console.log('div Clicked');
        
    }
    onKeyUp(){
        console.log(this.email);
        
    }
    
}