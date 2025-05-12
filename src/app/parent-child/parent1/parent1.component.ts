import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {
  public parentPublic : string = "parent variable";
}
