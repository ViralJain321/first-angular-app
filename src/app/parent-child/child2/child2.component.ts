import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Parent1Component } from 'src/app/parent-child/parent1/parent1.component';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component extends Parent1Component {

  // constructor(){
  //   super("hello child2");
  // }

  ngOnInit(){
    console.log(this.parentPublic);
    this.parentPublic ="changed parent public by child2";
    console.log(this.parentPublic);
  }
  
}
