import { Component, Input, OnInit, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { DropdownItem } from 'src/app/shared/interfaces/dropdown.interface';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() listOfLocales: Array<DropdownItem> = [
    { id: 1, item: 'Cognizant EN/US' },
    { id: 1, item: 'Cognizant EN/FR' },
  ];

  @HostListener('window:click', ['$event.target']) onWindowClick(e: any) {
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

  constructor(
    private formBuilder: FormBuilder,
    private broadcastService: BroadcastService
  ) {}

  ngOnInit(): void {
    this.title = this.listOfLocales[0].item;
    this.selectedItem = new FormGroup({
      name: new FormControl(this.title, [Validators.required]),
    });
  }

  selectOption(selectedItem: DropdownItem) {
    this.isDropdownListVisible = !this.isDropdownListVisible;
    this.title = selectedItem.item;
    this.selectedItem.patchValue({ name: selectedItem.item });

    this.broadcastService.dispatch(
      new AppEvent(AppEventType.CHECKBOX_EVENT, {
        name: AppEventType.CLICKED_ON_LOCALE_DROPDOWN,
        data: { selectedItem },
      })
    );
  }

  onTitleClick() {
    this.isDropdownListVisible = !this.isDropdownListVisible;
  }
}
