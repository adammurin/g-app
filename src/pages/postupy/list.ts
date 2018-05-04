import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostupyService } from '../../providers/postupy-service/postupy-service';
import { PostupyDetailPage } from '../postupy-detail/postupy-detail';

@Component({
  selector: 'page-postupy',
  templateUrl: 'list.html',
  providers: [PostupyService]
})
export class PostupyPage {
  
  postupy: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postupyService: PostupyService) {
    this.getPostupy();
  }


    getPostupy() {
      this.postupyService.getPostupy()
      .then(data => {
        this.postupy = data;
        console.log(this.postupy);
      });
    }


    viewItem(postup){
      this.navCtrl.push(PostupyDetailPage, {
        postup: postup
      });
    }
}
