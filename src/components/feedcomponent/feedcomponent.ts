import {Component, Input} from '@angular/core';
import {AnimationService} from "css-animator";
import {ModalController} from "ionic-angular";
import {CommentsPage} from "../../pages/comments/comments";
import {Feed} from "./feed";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the FeedcomponentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'feedcomponent',
  templateUrl: 'feedcomponent.html'
})
export class FeedcomponentComponent {

  @Input()
  feed;
  id;
  animator;
  mapping;
  modalComments;


  constructor( private animationService: AnimationService, private modalCtrl : ModalController,  public sanitizer: DomSanitizer) {
      this.id = new Date().getTime();
      this.mapping =  {'=0': '', '=1': 'View 1 comment', 'other': 'View all # comments'};


  }

  animateElem(feed ) {

    this.animator = this.animationService.builder();
    let myElement =  (<HTMLInputElement>document.getElementById("image"+this.id))

    console.log(myElement)

    this.animator.setDuration(500).setType('pulse').show(myElement).then(item =>{
      this.animator.setDuration(0).hide(myElement);
    })

    feed.like();

  }

  goToComments(feed : Feed){

    let modal = this.modalCtrl.create(CommentsPage, {comments : feed.comments})
    modal.present();


  }

}
