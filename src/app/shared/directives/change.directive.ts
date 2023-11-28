import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {

  
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.color = "red";
    this.ele.nativeElement.style.backgroundColor = "yellow";
    this.ele.nativeElement.style.backgroundColor = "50px";

  }

  ngOnInit(){
    this.backgroundColor =this.defaultColor;
  }

  @Input() defaultColor : string
  @Input() highlightColor : string;
  
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //Event Based Styling
  @HostListener('mouseenter') onMouseEnter(){
    // this.ele.nativeElement.style.backgroundColor = "blue";
    // this.backgroundColor = 'blue'
    this.backgroundColor = this.defaultColor; 
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.ele.nativeElement.style.backgroundColor = "yellow";
    // this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
  }

}
