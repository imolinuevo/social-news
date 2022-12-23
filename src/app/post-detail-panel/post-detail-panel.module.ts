import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailPanelRoutingModule } from './post-detail-panel-routing.module';
import { PostDetailPanelComponent } from './post-detail-panel.component';
import { DetailTopPanelComponent } from './detail-top-panel/detail-top-panel.component';
import { DetailContentPanelComponent } from './detail-content-panel/detail-content-panel.component';
import { DetailCommentsPanelComponent } from './detail-comments-panel/detail-comments-panel.component';
import { DetailDescriptionPanelComponent } from './detail-description-panel/detail-description-panel.component';
import { DetailSuggestPanelComponent } from './detail-suggest-panel/detail-suggest-panel.component';


@NgModule({
  declarations: [
    PostDetailPanelComponent,
    DetailTopPanelComponent,
    DetailContentPanelComponent,
    DetailCommentsPanelComponent,
    DetailDescriptionPanelComponent,
    DetailSuggestPanelComponent
  ],
  imports: [
    CommonModule,
    PostDetailPanelRoutingModule
  ]
})
export class PostDetailPanelModule { }
