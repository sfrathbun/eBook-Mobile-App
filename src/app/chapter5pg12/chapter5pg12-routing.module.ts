import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter5pg12Page } from './chapter5pg12.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter5pg12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter5pg12PageRoutingModule {}
