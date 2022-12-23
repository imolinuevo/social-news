import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPanelRoutingModule } from './main-panel-routing.module';
import { MainPanelComponent } from './main-panel.component';
import { MainTopPanelComponent } from './main-top-panel/main-top-panel.component';
import { MainLeftPanelComponent } from './main-left-panel/main-left-panel.component';
import { MainCentralPanelComponent } from './main-central-panel/main-central-panel.component';
import { MainRightPanelComponent } from './main-right-panel/main-right-panel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainPanelComponent,
    MainTopPanelComponent,
    MainLeftPanelComponent,
    MainCentralPanelComponent,
    MainRightPanelComponent,
  ],
  imports: [CommonModule, MainPanelRoutingModule, SharedModule],
})
export class MainPanelModule {}
