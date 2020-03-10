import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter1pg3Page } from './chapter1pg3.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter1pg3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter1pg3PageRoutingModule {}
