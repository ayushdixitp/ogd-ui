import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from './configurations.component';
import { ProvisionComponent } from './provision/provision.component';

@NgModule({
  declarations: [ConfigurationsComponent, ProvisionComponent],
  imports: [CommonModule, ConfigurationsRoutingModule, SharedModule],
})
export class ConfigurationsModule {}
