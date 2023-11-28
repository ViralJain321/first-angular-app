import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective {

  constructor(private eleRef : ElementRef , private renderer : Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement , 'background-color' , 'brown');
  }

}
