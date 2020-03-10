import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter2pg5PageRoutingModule } from './chapter2pg5-routing.module';

import { Chapter2pg5Page } from './chapter2pg5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter2pg5PageRoutingModule
  ],
  declarations: [Chapter2pg5Page]
})
export class Chapter2pg5PageModule {}
