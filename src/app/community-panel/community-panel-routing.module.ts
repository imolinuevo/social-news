import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityPanelComponent } from './community-panel.component';

const routes: Routes = [{ path: '', component: CommunityPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityPanelRoutingModule { }
