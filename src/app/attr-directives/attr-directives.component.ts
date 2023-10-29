import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.scss']
})
export class AttrDirectivesComponent {
  border: string = "2px solid blue";
  fontSize: string = "25px";
  backColor: string = "green";
  foreColor: string = "red"

  addBorder : boolean = true;
  addColor : boolean = true;

}
