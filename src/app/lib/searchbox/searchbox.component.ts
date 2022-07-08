import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'phenom-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent implements OnInit {
  public searchFilter: any = '';
  constructor() {}
  @Input('value') public value!: Array<string>;
  enteredSearchValue: string = '';
  searchText: string = '';
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

  ngOnInit(): void {}
}
