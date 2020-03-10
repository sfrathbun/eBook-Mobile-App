import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter3pg8PageRoutingModule } from './chapter3pg8-routing.module';

import { Chapter3pg8Page } from './chapter3pg8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter3pg8PageRoutingModule
  ],
  declarations: [Chapter3pg8Page]
})
export class Chapter3pg8PageModule {}
