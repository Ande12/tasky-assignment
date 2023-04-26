import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  constructor() { }

  private STORE = localStorage;

  set(key: string, data: any) {
    try {
      this.STORE.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  }

  get(key: string) {
    try {
      const response = JSON.parse(this.STORE.getItem(key) ?? '');
      return {
        status: true,
        data: response
      }
    } catch (error) {
      return {
        status: false,
        data: null
      }
    }
  }
}
