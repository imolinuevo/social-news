import {
  Directive,
  HostListener,
  HostBinding,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

@Directive({
  selector: '[appAccordion]',
  exportAs: 'appAccordion',
})
export class AccordionDirective {
  private wasInside = false;
  @Input() itemIndex: string = 'closed';
  @HostBinding('class.show') isOpen = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.isOpen = this.itemIndex === '0' ? true : false;
    this.cdRef.detectChanges();
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.wasInside = true;
  }

  @HostListener('document:click') clickout() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
