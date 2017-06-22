
import {Comment} from "./comment";


export class Feed{


  private _name : string;
  private _avatar : string;
  private _image : string;
  private _likes : number;
  private _isLiked : Boolean;
  private _publishDate: Date;
  private _location: string;
  private _description: string;
  private _comments : Comment[];

  constructor(){
    this._comments = new Array<Comment>();
    this.likes = 0;
  }

  like(){
    if (!this.isLiked){
      this.likes = this.likes +1;
      this.isLiked = true;
    }

  }

  set name(value: string) {
    this._name = value;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  set image(value: string) {
    this._image = value;
  }

  set likes(value: number) {
    this._likes = value;
  }

  set isLiked(value: Boolean) {
    this._isLiked = value;
  }

  set publishDate(value: Date) {
    this._publishDate = value;
  }

  set location(value: string) {
    this._location = value;
  }

  set description(value: string) {
    this._description = value;
  }

  addComment(name, text, avatar){
    let comment = new Comment(name, text, avatar, new Date());
    this._comments.push(comment);

    return this;
  }


  get name(): string {
    return this._name;
  }

  get avatar(): string {
    return this._avatar;
  }

  get image(): string {
    return this._image;
  }

  get likes(): number {
    return this._likes;
  }

  get isLiked(): Boolean {
    return this._isLiked;
  }

  get publishDate(): Date {
    return this._publishDate;
  }

  get location(): string {
    return this._location;
  }

  get description(): string {
    return this._description;
  }

  get comments(): Comment[] {
    return this._comments;
  }
}
