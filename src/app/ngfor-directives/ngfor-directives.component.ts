import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-directives',
  templateUrl: './ngfor-directives.component.html',
  styleUrls: ['./ngfor-directives.component.scss']
})
export class NgforDirectivesComponent {

  courses: any[] = [];

  // courses : any[] = [
  //   {name : "Angular" , id : "1001" , fees : 3999},
  //   {name : "Java" , id : "1002" , fees : 4999},
  // ]

  myChoice: number = 0;

  nextChoice() {
    this.myChoice++;
    this.myChoice > 4 ? this.myChoice = 0 : undefined
  }
}
