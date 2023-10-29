import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.color = "red";
    this.ele.nativeElement.style.backgroundColor = "yellow";
    this.ele.nativeElement.style.backgroundColor = "50px";
  }

  //Event Based Styling
  @HostListener('mouseenter') onMouseEnter(){
    this.ele.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.ele.nativeElement.style.backgroundColor = "yellow";
  }

}
