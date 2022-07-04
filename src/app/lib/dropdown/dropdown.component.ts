import { Component, Input, OnInit, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() listOfLocales = [
    { id: 1, item: 'Cognizant EN/US' },
    { id: 1, item: 'Cognizant EN/FR' },
  ];

  @HostListener('click', ['$event.target']) onClick(e: any) {
    // if condition to if check if click is happened outside or not
    if (e.id != 'dropdown') {
      if (this.isDropdownListVisible) {
        this.isDropdownListVisible = !this.isDropdownListVisible;
      }
    }
  }

  title!: string;
  isDropdownListVisible: boolean = false;
  selectedItem!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.title = this.listOfLocales[0].item;
    this.selectedItem = new FormGroup({
      name: new FormControl(this.title, [Validators.required]),
    });
  }

  selectOption(selectedItem: any) {
    this.isDropdownListVisible = !this.isDropdownListVisible;
    this.title = selectedItem.item;
    this.selectedItem.patchValue({ name: selectedItem.item });
  }

  onTitleClick() {
    this.isDropdownListVisible = !this.isDropdownListVisible;
  }
}
