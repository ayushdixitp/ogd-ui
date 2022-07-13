import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToggleComponent } from 'src/app/lib/toggle/toggle.component';
import { CheckboxComponent } from 'src/app/lib/checkbox/checkbox.component';
import { DropdownComponent } from '../lib/dropdown/dropdown.component';
import { AccordionComponent } from '../lib/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AccordionComponent],
  declarations: [
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    SidebarComponent,
  ],
  exports: [
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    AccordionComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
