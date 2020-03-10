import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter5pg12PageRoutingModule } from './chapter5pg12-routing.module';

import { Chapter5pg12Page } from './chapter5pg12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter5pg12PageRoutingModule
  ],
  declarations: [Chapter5pg12Page]
})
export class Chapter5pg12PageModule {}
