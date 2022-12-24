import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPanelComponent } from './footer-panel/footer-panel.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [FooterPanelComponent, LoginPopupComponent, DropdownDirective],
  imports: [CommonModule],
  exports: [FooterPanelComponent, LoginPopupComponent, DropdownDirective],
})
export class SharedModule {}
