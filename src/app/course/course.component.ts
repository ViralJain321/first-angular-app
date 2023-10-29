import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  course: Course[] = [
    { courseId: 1001, courseName: "Angular", price: 0, rating: 5, description: "Angular Course" },
    { courseId: 1001, courseName: "Vue", price: 5000, rating: 5, description: "Angular Course" },
    { courseId: 1001, courseName: "React", price: 6000, rating: 5, description: "Angular Course" },
  ]

}
