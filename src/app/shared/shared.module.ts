import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPanelComponent } from './footer-panel/footer-panel.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { DropdownDirective } from './dropdown.directive';
import { AccordionDirective } from './accordion.directive';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    FooterPanelComponent,
    LoginPopupComponent,
    DropdownDirective,
    AccordionDirective,
    ModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    FooterPanelComponent,
    LoginPopupComponent,
    DropdownDirective,
    AccordionDirective,
    ModalComponent,
  ],
})
export class SharedModule {}
