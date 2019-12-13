import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

  // courses = [1,2];
  viewMode = 'map';
  courses;
  // courses = [
  //   {id: 1, name: 'course1'},
  //   {id: 2, name: 'course2'},
  //   {id: 3, name: 'course3'}
  //  ];

   onClick(){
     this.courses.push({id: 4, name: 'course4'});
   }
   onRemove(course){
    this.courses.splice(this.courses.indexOf(course),2)
   }

   loadCourses(){
     this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
     ]
   }
   trackCourse(index, course) {
    return course ? course.id : undefined;
   }

}
