import { ElementRef } from '@angular/core';
import { ButtonclickDirective } from './buttonclick.directive';

describe('ButtonclickDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(null);
    const directive = new ButtonclickDirective(el);
    expect(directive).toBeTruthy();
  });
});
