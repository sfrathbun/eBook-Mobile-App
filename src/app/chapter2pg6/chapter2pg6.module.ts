import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter2pg6PageRoutingModule } from './chapter2pg6-routing.module';

import { Chapter2pg6Page } from './chapter2pg6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter2pg6PageRoutingModule
  ],
  declarations: [Chapter2pg6Page]
})
export class Chapter2pg6PageModule {}
