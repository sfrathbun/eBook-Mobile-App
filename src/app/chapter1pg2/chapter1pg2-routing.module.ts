import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter1pg2Page } from './chapter1pg2.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter1pg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter1pg2PageRoutingModule {}
