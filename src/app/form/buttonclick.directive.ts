import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonclick]'
})
export class ButtonclickDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  onClick() {
    this.el.nativeElement.disabled = true;
  }

}
