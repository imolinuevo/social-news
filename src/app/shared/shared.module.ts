import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPanelComponent } from './footer-panel/footer-panel.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { DropdownDirective } from './dropdown.directive';
import { AccordionDirective } from './accordion.directive';

@NgModule({
  declarations: [
    FooterPanelComponent,
    LoginPopupComponent,
    DropdownDirective,
    AccordionDirective,
  ],
  imports: [CommonModule],
  exports: [
    FooterPanelComponent,
    LoginPopupComponent,
    DropdownDirective,
    AccordionDirective,
  ],
})
export class SharedModule {}
