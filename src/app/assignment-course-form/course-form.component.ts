import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Assignment-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

Log(e){
  console.log(e);
  
}
courses = [
  {id:1, name:'Development'},
  {id:2, name:'Art'},
  {id:3, name:'Languagaes'}
]

}
