import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OgdRoutingModule } from './ogd-routing.module';
import { OgdComponent } from './ogd.component';
import { LocaleOgdComponent } from './locale-ogd/locale-ogd.component';
import { EnvironmentOgdComponent } from './environment-ogd/environment-ogd.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OgdComponent, LocaleOgdComponent, EnvironmentOgdComponent],
  imports: [CommonModule, OgdRoutingModule, SharedModule],
})
export class OgdModule {}
