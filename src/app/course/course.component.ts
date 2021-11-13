import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
  title: string = "List of courses";
  courses;
  getTitle(){

    return this.title
  }

  constructor(service:CourseService){

    this.courses = service.getCourses()
  }
 

}
