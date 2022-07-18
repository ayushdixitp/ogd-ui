import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-locale-list',
  templateUrl: './locale-list.component.html',
  styleUrls: ['./locale-list.component.scss'],
})
export class LocaleListComponent implements OnInit {
  constructor() {}
  // @Input('localeList') public localeList!: Array<string>;
  localeList =["Hyderabad", "Chennai", "Mumbai", "Agra", "Delhi"];
  searchText: string = '';

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
  }

  ngOnInit(): void {}
}
