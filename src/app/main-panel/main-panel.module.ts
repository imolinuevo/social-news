import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPanelRoutingModule } from './main-panel-routing.module';
import { MainPanelComponent } from './main-panel.component';
import { MainTopPanelComponent } from './main-top-panel/main-top-panel.component';
import { MainLeftPanelComponent } from './main-left-panel/main-left-panel.component';
import { MainCentralPanelComponent } from './main-central-panel/main-central-panel.component';
import { MainRightPanelComponent } from './main-right-panel/main-right-panel.component';
import { SharedModule } from '../shared/shared.module';
import { CollapsibleComponent } from './main-left-panel/collapsible/collapsible.component';
import { TrendingTodayComponent } from './main-central-panel/trending-today/trending-today.component';
import { PopularFiltersComponent } from './main-central-panel/popular-filters/popular-filters.component';
import { PostListComponent } from './main-central-panel/post-list/post-list.component';
import { PolicyPanelComponent } from './main-right-panel/policy-panel/policy-panel.component';

@NgModule({
  declarations: [
    MainPanelComponent,
    MainTopPanelComponent,
    MainLeftPanelComponent,
    MainCentralPanelComponent,
    MainRightPanelComponent,
    CollapsibleComponent,
    TrendingTodayComponent,
    PopularFiltersComponent,
    PostListComponent,
    PolicyPanelComponent,
  ],
  imports: [CommonModule, MainPanelRoutingModule, SharedModule],
})
export class MainPanelModule {}
