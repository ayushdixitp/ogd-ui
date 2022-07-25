import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  formatLocale(locale: string) {
    return locale.toUpperCase().split('_').join(' ');
  }
}
