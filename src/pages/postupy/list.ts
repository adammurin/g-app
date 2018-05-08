import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostupyService } from '../../providers/postupy-service/postupy-service';
import { PostupyDetailPage } from '../postupy-detail/postupy-detail';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-postupy',
  templateUrl: 'list.html',
  providers: [PostupyService]
})
export class PostupyPage {
  
  postupy: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postupyService: PostupyService, private file: File) {
    this.getPostupy();
    //this.getData();
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

    getData() {
      this.file.checkDir(this.file.dataDirectory, 'json')
      .then(_ => console.log('Directory exists'))
      .catch(err => console.log(this.file.dataDirectory));
    }

}
