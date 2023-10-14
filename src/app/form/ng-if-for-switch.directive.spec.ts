import { ElementRef } from '@angular/core';
import { NgIfForSwitchDirective } from './ng-if-for-switch.directive';

describe('NgIfForSwitchDirective', () => {
  it('should create an instance', () => {
    const el=new ElementRef(null);
    const directive = new NgIfForSwitchDirective(el);
    expect(directive).toBeTruthy();
  });
});
