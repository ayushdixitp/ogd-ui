import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setLocalStorageItem(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  getLocalStorageItem(key: string) {
    return localStorage?.getItem(key);
  }
}
