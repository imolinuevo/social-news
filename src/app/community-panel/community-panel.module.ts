import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityPanelRoutingModule } from './community-panel-routing.module';
import { CommunityPanelComponent } from './community-panel.component';


@NgModule({
  declarations: [
    CommunityPanelComponent
  ],
  imports: [
    CommonModule,
    CommunityPanelRoutingModule
  ]
})
export class CommunityPanelModule { }
