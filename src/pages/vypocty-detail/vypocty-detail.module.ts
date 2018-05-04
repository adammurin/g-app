import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VypoctyDetailPage } from './vypocty-detail';

@NgModule({
  declarations: [
    VypoctyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(VypoctyDetailPage),
  ],
})
export class VypoctyDetailPageModule {}
