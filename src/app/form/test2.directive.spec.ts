import { Test2Directive } from './test2.directive';
import { Directive,ElementRef,HostListener } from '@angular/core';


describe('Test2Directive', () => {
  it('should create an instance', () => {
    const el=new ElementRef(null);
    const directive = new Test2Directive(el);

    expect(directive).toBeTruthy();
  });
});
