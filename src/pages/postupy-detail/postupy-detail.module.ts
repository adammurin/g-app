import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostupyDetailPage } from './postupy-detail';

@NgModule({
  declarations: [
    PostupyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PostupyDetailPage),
  ],
})
export class PostupyDetailPageModule {}
