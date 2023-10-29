import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.scss']
})
export class DirectiveAssignmentComponent {

  courses: any[] = [
    { name: "Angular", id: "1001", fees: 3999 },
    { name: "Java", id: "1002", fees: 4999 },
  ];

  showRide : boolean = false;

  show() {
    this.showRide = !this.showRide;
  }
}
