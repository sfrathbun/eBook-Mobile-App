import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter4pg10PageRoutingModule } from './chapter4pg10-routing.module';

import { Chapter4pg10Page } from './chapter4pg10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter4pg10PageRoutingModule
  ],
  declarations: [Chapter4pg10Page]
})
export class Chapter4pg10PageModule {}
