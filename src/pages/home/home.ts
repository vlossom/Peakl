import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, Content} from 'ionic-angular';
import {ManagePhotoPage} from "../manage-photo/manage-photo";
import {AnimationService, AnimationBuilder} from 'css-animator';
import {PhotoPage} from "../photo/photo";
import {CameraPreview} from "@ionic-native/camera-preview";
import {FeedService} from "../../app/feed.service";
import {StoryService} from "../../app/story.service";
import {Feed} from "../../components/feedcomponent/feed";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  filter;
  feeds;

  private animator: AnimationBuilder;

  @ViewChild(Content)
  content: Content;

  @ViewChild('stories')
  stories: ElementRef


  constructor(public navCtrl: NavController, private cameraPreview: CameraPreview, private feedService: FeedService, private storyService: StoryService) {
    this.filter = "normal"
  }


  doRefresh(refresher) {

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();



      let feedTemp = new Feed();
      feedTemp.name = "Mike Person";
      feedTemp.location = "Florida State";
      feedTemp.description = "What a nice tiger";
      feedTemp.publishDate = new Date();
      feedTemp.image = "assets/tigre.jpg";
      feedTemp.avatar = "assets/person-outline-filled.png"

      this.feedService.addFeed(feedTemp);

      this.feeds = this.feedService.getFeed();

    }, 2000);


  }


  changeFilter(newFilter) {
    this.filter = newFilter;
  }

  goToPhoto() {
    this.navCtrl.push(PhotoPage, {})
  }

  ionViewWillEnter() {


    let myElement = (<HTMLDivElement>document.getElementById("stories"))

    myElement.innerHTML = "";


    let zukeModal = (<HTMLDivElement>document.getElementById("zuck-modal"))
    if (zukeModal) {

      if (zukeModal.parentNode) {
        zukeModal.parentNode.removeChild(zukeModal);
      }

    }


    this.cameraPreview.stopCamera().then(() => {
      console.log("stop")
    }).catch(e => {
      console.log("stop")
    });

    var skins = {
      'Snapgram': {
        'avatars': true,
        'list': false,
        'autoFullScreen': false,
        'cubeEffect': true
      },

      'VemDeZAP': {
        'avatars': false,
        'list': true,
        'autoFullScreen': false,
        'cubeEffect': false
      },

      'FaceSnap': {
        'avatars': true,
        'list': false,
        'autoFullScreen': true,
        'cubeEffect': false
      },

      'Snapssenger': {
        'avatars': false,
        'list': false,
        'autoFullScreen': false,
        'cubeEffect': false
      }
    };

    let skin = "Snapgram"

    var stories = new (<any>window).Zuck('stories', {
      backNative: true,
      autoFullScreen: skins[skin]['autoFullScreen'],
      skin: skin,
      avatars: skins[skin]['avatars'],
      list: skins[skin]['list'],
      cubeEffect: skins[skin]['cubeEffect'],
      localStorage: true,
      stories: this.storyService.getFeed()
    });

    this.feeds = this.feedService.getFeed();
  }


}
