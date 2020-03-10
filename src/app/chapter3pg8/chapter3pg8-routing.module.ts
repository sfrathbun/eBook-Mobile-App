import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter3pg8Page } from './chapter3pg8.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter3pg8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter3pg8PageRoutingModule {}
