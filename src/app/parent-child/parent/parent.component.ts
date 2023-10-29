import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  newManufacturer : string = "";

  manufacturers: string[] = ['Apple' , "Xiaomi" , "Samsung"];

  addManufacturer(){
    this.manufacturers.push(this.newManufacturer);
    this.newManufacturer = "";
  }





}
