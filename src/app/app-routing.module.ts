import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-panel/main-panel.module').then((m) => m.MainPanelModule),
  },
  {
    path: 'r',
    loadChildren: () =>
      import('./community-panel/community-panel.module').then(
        (m) => m.CommunityPanelModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
