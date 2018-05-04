import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NastrojeDetailPage } from './item';

@NgModule({
  declarations: [
    NastrojeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NastrojeDetailPage),
  ],
})
export class NastrojeDetailPageModule {}
