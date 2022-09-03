import { Routes } from '@angular/router';
import { Provisioning } from './provisioning/provisioning.component';
import { LocalesComponent } from './locales/locales.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'web',
        component: ConfigurationsComponent,
        data: { state: { ExperienceType: 'cx' } },
      },
      {
        path: 'locales',
        component: LocalesComponent,
      },
      {
        path: 'employee-site-bot',
        component: ConfigurationsComponent,
        data: { state: { ExperienceType: 'ex' } },
      },
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
        component: Provisioning,
        data: {},
      },
      {
        path: 'configure-msteams-channel',
        component: Provisioning,
        data: {},
      },
    ],
  },
];
