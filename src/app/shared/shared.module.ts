import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPanelComponent } from './footer-panel/footer-panel.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';

@NgModule({
  declarations: [FooterPanelComponent, LoginPopupComponent],
  imports: [CommonModule],
  exports: [FooterPanelComponent, LoginPopupComponent],
})
export class SharedModule {}
