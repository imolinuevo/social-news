import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailPanelRoutingModule } from './post-detail-panel-routing.module';
import { PostDetailPanelComponent } from './post-detail-panel.component';


@NgModule({
  declarations: [
    PostDetailPanelComponent
  ],
  imports: [
    CommonModule,
    PostDetailPanelRoutingModule
  ]
})
export class PostDetailPanelModule { }
