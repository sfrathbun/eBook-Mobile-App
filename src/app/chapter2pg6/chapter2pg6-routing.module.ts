import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter2pg6Page } from './chapter2pg6.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter2pg6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter2pg6PageRoutingModule {}
