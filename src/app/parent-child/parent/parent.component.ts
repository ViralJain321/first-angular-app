import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent{

  newManufacturer : string = "";

  manufacturers: string[] = ['Apple' , "Xiaomi" , "Samsung"];

  @ViewChild(ChildComponent)
  public child: Component = {};

  @ViewChild(GrandchildComponent)
  public grandchild : Component

  ngAfterViewInit(){
    console.log(this.grandchild);
  }

  addManufacturer(){
    this.manufacturers.push(this.newManufacturer);
    this.newManufacturer = "";
  }


  changeContentOfpTag(pElem : HTMLParagraphElement){
    console.log(this.child);
    
    pElem.innerHTML = "Changed Text on Click"
    console.log(pElem.innerHTML);
  }

  addaNewEntry(newEntry : {brand : string , price : string }){
      this.manufacturers.push(newEntry.brand);
      this.manufacturers.push(newEntry.price);
  }




}
