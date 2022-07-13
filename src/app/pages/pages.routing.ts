import { Routes } from '@angular/router';
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
        path: 'home',
        component: WebChatbotComponent,
      },
    ],
  },
];
