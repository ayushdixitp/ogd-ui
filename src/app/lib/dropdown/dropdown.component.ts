import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() listOfLocales = [
    { id: 1, item: 'Phenom US' },
    { id: 1, item: 'Phenom FR' },
  ];

  @HostListener('click', ['$event.target']) onClick(e: any) {
    if (e.id != 'dropdown') {
      if (this.isDropdownListVisible) {
        this.isDropdownListVisible = !this.isDropdownListVisible;
      }
    }
  }

  title!: any;
  isDropdownListVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.title = this.listOfLocales[0].item;
  }

  selectOption(selectedItem: any) {
    this.isDropdownListVisible = !this.isDropdownListVisible;
    this.title = selectedItem.item;
  }

  showDropdownList() {
    this.isDropdownListVisible = !this.isDropdownListVisible;
  }
}
