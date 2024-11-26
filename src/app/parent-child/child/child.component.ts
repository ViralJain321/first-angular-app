import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  public h: string = '';

  @Input() data: string[] = [];

  @Output()
  newBrandEntry = new EventEmitter<{ brand: string, price: string }>();

  @ViewChild('newBrand', { static: true })
  thebrand: ElementRef = {} as ElementRef;

  @ContentChild('parentcontentag')
  parentcontentag : ElementRef = {} as ElementRef;

  public onPushStratergy : string = "theOnPushStratergy";

  constructor() {
    console.log(this.data);
  }


  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges called! ');
  //   console.log(changes);
  // }

  // ngOnInit() {
  //   console.log('ngOnInit called!');
  //   console.log('The brand ' + this.thebrand.nativeElement.value);
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck called!');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called!');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called!');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called!');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called!');
  // }

  print(event : Event) {
    const elem = event.currentTarget as HTMLElement;
    console.log(event);
    
    
    console.log(elem.nodeName);
    console.log(elem.parentNode);
    
    console.log("keydown occours");
  }

  addNewBrand(newBrand: HTMLInputElement, newPrice: HTMLInputElement) {
    console.log(this.parentcontentag);
    this.thebrand.nativeElement.focus()
    console.log(this.thebrand);
    this.newBrandEntry.emit({ brand: newBrand.value, price: newPrice.value });
  }

}
