import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalesComponent } from './locales.component';
import { LocalesRoutingModule } from './locales-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LocalesComponent],
  imports: [CommonModule, SharedModule, LocalesRoutingModule],
})
export class LocalesModule {}
