import { Routes } from '@angular/router';
import { LocalesComponent } from './locales/locales.component';
import { WebChatbotComponent } from './web-chatbot/web-chatbot.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: WebChatbotComponent,
      },
      {
        path: 'home-ex',
        component: WebChatbotComponent,
      },
      {
        path: 'locales',
        component: LocalesComponent,
      },
    ],
  },
];
