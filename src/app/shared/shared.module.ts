import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToggleComponent } from '../lib/toggle/toggle.component';
import { CheckboxComponent } from '../lib/checkbox/checkbox.component';
import { DropdownComponent } from '../lib/dropdown/dropdown.component';
import { AccordionComponent } from '../lib/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProgressbarComponent } from '../lib/progressbar/progressbar.component';
import { CardComponent } from '../lib/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AccordionComponent,
  ],
  declarations: [
    ProgressbarComponent,
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  exports: [
    ProgressbarComponent,
    ToggleComponent,
    CheckboxComponent,
    DropdownComponent,
    AccordionComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
