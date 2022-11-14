import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleListComponent } from './locale-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocalesModule } from '../locales/locales.module';
import { LocaleListRoutingModule } from './locale-list-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, LocalesModule, LocaleListRoutingModule],
  declarations: [LocaleListComponent],
})
export class LocaleListModule {}
