import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  //selector: '[appTest2]',
  selector: '[Highlight]'
})


export class Test2Directive {

  constructor(private el:ElementRef) { }
  // for Hightlight Directive
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
// For Disabled Directive

}
