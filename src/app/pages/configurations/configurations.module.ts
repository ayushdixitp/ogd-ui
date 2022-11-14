import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from './configurations.component';
import { SetupComponent } from './setup/setup.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProvisionComponent } from './provision/provision.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationsRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [ConfigurationsComponent, SetupComponent, ProvisionComponent],
  exports: [ConfigurationsComponent],
})
export class ConfigurationsModule {
  constructor() {
    console.log('config module');
  }
}
