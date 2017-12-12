import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorage {

  constructor(private storage: Storage) {
  }
   GetLoggedIn(): Promise<any> {
    return this.storage.get('LoggedIn');
  }

   LoggedIn(val) {
    this.storage.set('LoggedIn', val);
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
   pushToken(val)
  {
     this.storage.set('PushToken',val);
  }
   GetpushToken():Promise<any>
  {
   return this.storage.get('PushToken');
  }
  get distance(): Promise<any> {
    return this.storage.get('distance');
  }

  set distance(val) {
    this.storage.set('distance', val);
  }
  get oneSingalPushToken() : Promise<any> {
    return this.storage.get('oneSingalPushToken');
  }

  set oneSingalPushToken(val) {
    this.storage.set('oneSingalPushToken',  val);
  }

  get lang(): Promise<any> {
    return this.storage.get('lang');
  }

   gettoken(): Promise<any> {
      return this.storage.get('token');
  }

  RemoveToken() {
       return this.storage.remove('token');
  }
 token(val) {
      this.storage.set('token', val);
  }
  set lang(val) {
    this.storage.set('lang', val);
  }

  storeParkingAddress(val) {
    this.storage.set('ParkingAddress', val);
}
getParkingAddress() {
    return this.storage.get('ParkingAddress');
}
removeParkingAddress() {
   this.storage.remove('ParkingAddress');
}
  storeAddress(val) {
      this.storage.set('MobileAddress', val);
  }
  getAddress() {
      return this.storage.get('MobileAddress');
  }
  get restaurents() {
    return this.storage.get('restaurents');
  }

  set restaurents(val) {
    this.storage.set('restaurents', val);
  }

  clearAll()
  {
    this.storage.remove('restaurents');
    this.storage.remove('MobileAddress');
    this.storage.remove('token');
    this.storage.remove('oneSingalPushToken');
    this.storage.set('LoggedIn',false);
  }
}
