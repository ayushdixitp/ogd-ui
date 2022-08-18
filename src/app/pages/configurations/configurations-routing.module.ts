import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsComponent } from './configurations.component';

const routes: Routes = [
  { path: 'career-site-bot', component: ConfigurationsComponent },
  { path: 'employee-site-bot', component: ConfigurationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {}
