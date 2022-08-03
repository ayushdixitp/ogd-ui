import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToggleComponent } from 'src/app/lib/toggle/toggle.component';
import { CheckboxComponent } from 'src/app/lib/checkbox/checkbox.component';
import { DropdownComponent } from 'src/app/lib/dropdown/dropdown.component';
import { AccordionComponent } from 'src/app/lib/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputBoxComponent } from '../lib/input-box/input-box.component';
import { ProgressbarComponent } from 'src/app/lib/progressbar/progressbar.component';
import { CardComponent } from 'src/app/lib/card/card.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ButtonComponent } from 'src/app/lib/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    InputBoxComponent,
    ButtonComponent,
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
    InputBoxComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
