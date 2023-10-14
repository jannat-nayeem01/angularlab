import { TemplateBindingParseResult } from '@angular/compiler';
import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgIfForSwitch]'
})


export class NgIfForSwitchDirective {

  constructor(private el:ElementRef) { }
  
  
}
