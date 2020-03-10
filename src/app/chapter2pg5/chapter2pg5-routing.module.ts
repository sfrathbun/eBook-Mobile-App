import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter2pg5Page } from './chapter2pg5.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter2pg5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter2pg5PageRoutingModule {}
