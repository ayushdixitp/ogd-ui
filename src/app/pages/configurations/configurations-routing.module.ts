import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigurationsComponent } from './configurations.component';

// const routes: Routes = [
//   { path: 'career-site-bot', component: ConfigurationsComponent },
//   { path: 'employee-site-bot', component: ConfigurationsComponent },
//   { path: 'facebook-bot', component: ConfigurationsComponent },
//   { path: 'msteams-bot',component: ConfigurationsComponent }
// ];

const routes: Routes = [
  { path: ':experienceType/:pageId', component: ConfigurationsComponent },
  // { path: ':pageId', component: ConfigurationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {}
