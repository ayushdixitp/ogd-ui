import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToggleComponent } from 'src/app/lib/toggle/toggle.component';
import { CheckboxComponent } from 'src/app/lib/checkbox/checkbox.component';
import { DropdownComponent } from '../lib/dropdown/dropdown.component';
import { AccordionComponent } from '../lib/accordion/accordion.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AccordionComponent],
  declarations: [ToggleComponent, CheckboxComponent, DropdownComponent],
  exports: [
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    AccordionComponent,
  ],
})
export class SharedModule {}
