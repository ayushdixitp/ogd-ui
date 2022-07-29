import { Routes } from '@angular/router';
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
        path: 'home-ex',
        component: WebChatbotComponent,
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
    ],
  },
];
