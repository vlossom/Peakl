import { Component } from '@angular/core';
import {NavController, ModalController, App} from 'ionic-angular';
import {ManagePhotoPage} from "../manage-photo/manage-photo";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  adjustClockingModal

  constructor(public navCtrl: NavController,   private modalCtrl: ModalController,  private app: App) {

    this.adjustClockingModal =  this.modalCtrl.create(ManagePhotoPage, {});


  }

  ionViewWillEnter(){
    this.adjustClockingModal.onDidDismiss(() =>{
      this.app.getRootNav().getActiveChildNav().select(0);
    });

    this.adjustClockingModal.present()

  }

}
