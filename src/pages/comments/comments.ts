import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';


/**
 * Generated class for the CommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  comments : Comment[];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.comments = this.navParams.get('comments');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  back(){
    this.viewCtrl.dismiss();

  }


}
