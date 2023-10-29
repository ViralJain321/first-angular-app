import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.scss']
})
export class BindingExampleComponent {
  hasError: boolean = true;
  isColor: boolean = true
  border: string = "1px solid red"

  sum: number = 0;

  addNumber(num1: any, num2: any) {
    console.log(num1);
    console.log(num2);

    this.sum = Number(num1) + Number(num2);
  }

  courseName: string = "Angular"
  secCourse : string = "TypeScript"
}
