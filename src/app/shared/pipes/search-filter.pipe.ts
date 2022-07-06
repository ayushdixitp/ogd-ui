import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: Array<any>,
    keywords: string,
    isCaseSensitive: boolean = false
  ): any {
    if (!value) return null;
    if (!keywords) return value;

    if (!isCaseSensitive) keywords = keywords.toLowerCase();

    return value.filter(function (data: string) {
      return !isCaseSensitive
        ? JSON.stringify(data).toLowerCase().includes(keywords)
        : JSON.stringify(data).includes(keywords);
    });
  }
}
