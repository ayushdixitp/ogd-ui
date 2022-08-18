import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsComponent } from './configurations.component';

const routes: Routes = [
  { path: 'career-site-bot', component: ConfigurationsComponent },
  { path: 'employee-site-bot', component: ConfigurationsComponent },
  {
    path: 'facebook-bot',
    component: ConfigurationsComponent,
  },
  {
    path: 'msteams-bot',
    component: ConfigurationsComponent,
  },
  {
    path: 'configure-facebook-channel',
    component: ConfigurationsComponent,
    data: {},
  },
  {
    path: 'configure-msteams-channel',
    component: ConfigurationsComponent,
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {}
