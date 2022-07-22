import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  formatLocale(locale: string) {
    return locale.toUpperCase().split('_').join(' | ');
  }

  getDistinctLocalesPath(refNum: string, experienceType: string): string {
    return `v1/customers/${refNum}/${experienceType}/distinct-locales`;
  }
}
