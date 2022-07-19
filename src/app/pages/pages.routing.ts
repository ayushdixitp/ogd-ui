import { Routes } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { WebChatbotComponent } from './web-chatbot/web-chatbot.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: WebChatbotComponent,
      },
    ],
  },
];
