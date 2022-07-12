import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from 'src/app/lib/toggle/toggle.component';
import { CheckboxComponent } from 'src/app/lib/checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToggleComponent, CheckboxComponent],
  exports: [ToggleComponent, CheckboxComponent],
})
export class SharedModule {}
