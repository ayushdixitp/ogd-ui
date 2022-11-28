import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToggleComponent } from 'src/app/lib/toggle/toggle.component';
import { CheckboxComponent } from 'src/app/lib/checkbox/checkbox.component';
import { DropdownComponent } from 'src/app/lib/dropdown/dropdown.component';
import { AccordionComponent } from 'src/app/lib/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProgressbarComponent } from '../lib/progressbar/progressbar.component';
import { CardComponent } from '../lib/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchboxComponent } from '../lib/searchbox/searchbox.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { InputBoxComponent } from '../lib/input-box/input-box.component';
import { ButtonComponent } from '../lib/button/button.component';
import { RadioComponent } from '../lib/radio/radio.component';
import { SafePipe } from './pipes/safe.pipe';
import { NotificationCardComponent } from '../lib/notification-card/notification-card.component';
import { ModalComponent } from '../lib/modal/modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AccordionComponent,
    SafePipe,
    ProgressbarComponent,
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    LoaderComponent,
    SearchboxComponent,
    SearchFilterPipe,
    InputBoxComponent,
    ButtonComponent,
    RadioComponent,
    NotificationCardComponent,
    ModalComponent,
  ],
  exports: [
    AccordionComponent,
    SafePipe,
    ProgressbarComponent,
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    AccordionComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    LoaderComponent,
    SearchboxComponent,
    SearchFilterPipe,
    InputBoxComponent,
    ButtonComponent,
    RadioComponent,
    NotificationCardComponent,
  ],
})
export class SharedModule {}
