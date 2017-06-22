import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MomentModule} from 'angular2-moment';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ManagePhotoPage} from '../pages/manage-photo/manage-photo';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CameraPreview} from "@ionic-native/camera-preview";
import {ImageFilterDirective} from "./imagefilter";
import { AnimationService} from "css-animator";
import {PhotoPage} from "../pages/photo/photo";
import {TabsService} from "../util/tabservice";
import {ShowPhoto} from "../pages/show-photo/show-photo";
import {UnsplashItUtil} from "../util/unsplashItutil";
import {HttpModule} from "@angular/http";
import {PhotoLibrary} from "@ionic-native/photo-library";
import {CDVPhotoLibraryPipe} from "../util/cdvphotolibrary.pipe";
import {ImageService} from "../util/imageservice";
import {FilterService} from "../util/filterservice";
import {CanvasDraw} from "../pages/photo/canvasdraw";
import {LikesPage} from "../pages/likes/likes";
import {InstaTimeAgoPipe} from '../pipes/insta-time-ago/insta-time-ago';
import {FeedService} from "./feed.service";
import {StoryService} from "./story.service";
import {LikesService} from "../services/likes.service";
import {ProfilePage} from "../pages/profile/profile";
import {PopoverMenu} from "../pages/profile/popover.image";
import { FeedcomponentComponent } from '../components/feedcomponent/feedcomponent';
import {CommentsPage} from "../pages/comments/comments";
import {ElasticModule} from "angular2-elastic";
import {PublishPage} from "../pages/pushblish/publish";
import {SearchPage} from "../pages/search/search";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ManagePhotoPage,
    HomePage,
    TabsPage,
    PhotoPage,
    ImageFilterDirective,
    ShowPhoto,
    LikesPage,
    ProfilePage,
    SearchPage,
    PopoverMenu,
    CDVPhotoLibraryPipe,
    CanvasDraw,
    CommentsPage,
    InstaTimeAgoPipe,
    FeedcomponentComponent,
    PublishPage
  ],
  imports: [
    MomentModule,
    BrowserModule,
    ElasticModule,

    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ManagePhotoPage,
    HomePage,
    TabsPage,
    ShowPhoto,
    PhotoPage,
    LikesPage,
    ProfilePage,
    CommentsPage,
    PublishPage,
    SearchPage,
    CanvasDraw,
    PopoverMenu
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    AnimationService,
    FilterService,
    ImageService,
    LikesService,
    PhotoLibrary,
    TabsService,
    UnsplashItUtil,
    FeedService,
    StoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
