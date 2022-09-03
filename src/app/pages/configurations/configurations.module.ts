import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from './configurations.component';
import { ProvisionComponent } from './provision/provision.component';

@NgModule({
  imports: [CommonModule, SharedModule, ConfigurationsRoutingModule],
  declarations: [ConfigurationsComponent, ProvisionComponent],
})
export class ConfigurationsModule {
  constructor() {
    console.log('config module');
  }
}
