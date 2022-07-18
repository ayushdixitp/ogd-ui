import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToggleComponent } from '../lib/toggle/toggle.component';
import { CheckboxComponent } from '../lib/checkbox/checkbox.component';
import { DropdownComponent } from '../lib/dropdown/dropdown.component';
import { AccordionComponent } from '../lib/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from '../lib/card/card.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AccordionComponent],
  declarations: [
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    SidebarComponent,
    CardComponent,
  ],
  exports: [
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    AccordionComponent,
    SidebarComponent,
    CardComponent,
  ],
})
export class SharedModule {}
