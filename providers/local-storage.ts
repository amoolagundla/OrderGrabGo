import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorage {

  constructor(private storage: Storage) {
  }

  get skipIntroPage(): Promise<any> {
    return this.storage.get('skipIntroPage');
  }

  set skipIntroPage(val) {
    this.storage.set('skipIntroPage', val);
  }

  get unit(): Promise<any> {
    return this.storage.get('unit');
  }

  set unit(val) {
    this.storage.set('unit', val);
  }

  get mapStyle(): Promise<any> {
    return this.storage.get('mapStyle');
  }

  set mapStyle(val) {
    this.storage.set('mapStyle', val);
  }

  get distance(): Promise<any> {
    return this.storage.get('distance');
  }

  set distance(val) {
    this.storage.set('distance', val);
  }


  get lang(): Promise<any> {
    return this.storage.get('lang');
  }

  get token(): Promise<any> {
      return this.storage.get('token');
  }

  RemoveToken() {
       return this.storage.remove('token');
  }
  set token(val) {
      this.storage.set('token', val);
  }
  set lang(val) {
    this.storage.set('lang', val);
  }

}
