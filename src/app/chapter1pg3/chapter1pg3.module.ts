import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter1pg3PageRoutingModule } from './chapter1pg3-routing.module';

import { Chapter1pg3Page } from './chapter1pg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter1pg3PageRoutingModule
  ],
  declarations: [Chapter1pg3Page]
})
export class Chapter1pg3PageModule {}
