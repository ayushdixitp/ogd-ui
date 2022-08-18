import { Routes } from '@angular/router';
import { Provisioning } from './provisioning/provisioning.component';
import { LocalesComponent } from './locales/locales.component';
import { WebChatbotComponent } from './web-chatbot/web-chatbot.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'career-site-bot',
        component: WebChatbotComponent,
        data: { state: { ExperienceType: 'cx' } },
      },
      {
        path: 'locales',
        component: LocalesComponent,
      },
      {
        path: 'employee-site-bot',
        component: WebChatbotComponent,
        data: { state: { ExperienceType: 'ex' } },
      },
      {
        path: 'facebook-bot',
        component: WebChatbotComponent,
      },
      {
        path: 'msteams-bot',
        component: WebChatbotComponent,
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
