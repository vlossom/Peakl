/**
 * Created by Avell on 18/05/2017.
 */


import {Injectable} from '@angular/core';
import {Feed} from "../components/feedcomponent/feed";

@Injectable()
export class FeedService {

  feeds: Feed[];

  constructor() {

    let feedMock1 = new Feed();
    feedMock1.name = "pavei";

    feedMock1.avatar = "assets/profile.jpg",
    feedMock1.image = "assets/profile/1.jpg",
    feedMock1.likes = 14,
    feedMock1.isLiked = true,
    feedMock1.publishDate = new Date(),
    feedMock1.location = "Miami Beach",
    feedMock1.description = "Ainda assim, existem dúvidas a respeito de como a crescente influência da mídia obstaculiza a apreciação da importância das direções preferenciais no sentido do progresso.",

      feedMock1.addComment("pavei", "Very good", "/assets/profile.jpg")
        .addComment("vinicius", "Very good", "/assets/profile.jpg")
        .addComment("danilo", "Nice Job!", "/assets/profile.jpg")


    let feedMock2 = new Feed();


      feedMock2.name= "pavei";
        feedMock2.avatar= "assets/profile.jpg";
      feedMock2.image= "assets/profile/2.jpg";
      feedMock2.likes= 20;
      feedMock2.isLiked= false;
      feedMock2.publishDate= new Date();
      feedMock2.description= "Assim mesmo; o comprometimento entre as equipes garante a contribuição de um grupo importante na determinação das novas proposições.";


        let feedMock3 = new Feed();

      feedMock3.name= "pavei";
        feedMock3.avatar= "assets/profile.jpg";
      feedMock3.image= "assets/profile/3.jpg";
      feedMock3.likes= 30;
      feedMock3.isLiked= true;
      feedMock3.publishDate= new Date();
      feedMock3.description= "É difícil dizer adeus quando se quer ficar. É difícil sorrir quando se quer chorar. Mais difícil ainda é ter que esquecer; quando se quer amar..."


    let feedMock4 = new Feed();
      feedMock4.name= "pavei";
      feedMock4.avatar= "assets/profile.jpg";
      feedMock4.image= "assets/profile/4.jpg";
      feedMock4.likes= 30;
      feedMock4.isLiked= true;
      feedMock4.publishDate= new Date();


    let feedMock5 = new Feed();


      feedMock5.name= "pavei";
      feedMock5.avatar= "assets/profile.jpg";
      feedMock5.image= "assets/profile/5.jpg";
      feedMock5.likes= 30;
      feedMock5.isLiked= true;
      feedMock5.publishDate= new Date();


    let feedMock6 = new Feed();

      feedMock6.name= "pavei";
        feedMock6.avatar= "assets/profile.jpg";
      feedMock6.image= "assets/profile/6.jpg";
      feedMock6.likes= 30;
      feedMock6.isLiked= true;
      feedMock6.publishDate= new Date();


    this.feeds = [
      feedMock1, feedMock2, feedMock3, feedMock4, feedMock5, feedMock6
    ]

  }


  getFeed(): Feed[] {
    return this.feeds;
  }

  addFeed(obj : Feed) {
    this.feeds.unshift(obj);
  }

}
