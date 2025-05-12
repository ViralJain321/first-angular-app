import { Component } from '@angular/core';
import { Parent1Component } from '../parent1/parent1.component';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component extends Parent1Component {
  ngOnInit() {
    setTimeout(() => {
      console.log('child1 logs' + this.parentPublic);
    }, 2000);
  }
}
