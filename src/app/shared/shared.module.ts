import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from 'src/app/lib/toggle/toggle.component';
import { CheckboxComponent } from 'src/app/lib/checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [ToggleComponent, CheckboxComponent],
  exports: [ToggleComponent, CheckboxComponent],
})
export class SharedModule {}
