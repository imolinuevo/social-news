import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './main-panel.component';
import { AuthService } from '../auth/auth.service';

const routes: Routes = [
  {
    path: '',
    component: MainPanelComponent,
    children: [
      {
        path: 'detail',
        canActivate: [AuthService],
        loadChildren: () =>
          import('../post-detail-panel/post-detail-panel.module').then(
            (m) => m.PostDetailPanelModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPanelRoutingModule {}
