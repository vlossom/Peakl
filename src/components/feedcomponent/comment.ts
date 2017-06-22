/**
 * Created by Avell on 18/05/2017.
 */



export class Comment{

  private _name;
  private _avatar;
  private _text;
  private _date;


  constructor(name,text, avatar, date ) {
    this._name = name;
    this._avatar = avatar;
    this._text = text;
    this._date = date;
  }


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get avatar() {
    return this._avatar;
  }

  set avatar(value) {
    this._avatar = value;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
  }


  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }
}
