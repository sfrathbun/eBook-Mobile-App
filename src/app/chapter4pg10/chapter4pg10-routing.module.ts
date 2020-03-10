import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter4pg10Page } from './chapter4pg10.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter4pg10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter4pg10PageRoutingModule {}
