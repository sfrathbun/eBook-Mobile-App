import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter1pg2PageRoutingModule } from './chapter1pg2-routing.module';

import { Chapter1pg2Page } from './chapter1pg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter1pg2PageRoutingModule
  ],
  declarations: [Chapter1pg2Page]
})
export class Chapter1pg2PageModule {}
