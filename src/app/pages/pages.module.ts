import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { WebChatbotComponent } from './web-chatbot/web-chatbot.component';
import { LocalesComponent } from './locales/locales.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WebChatbotComponent, LocalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    CommonModule,
    SharedModule,
  ],
})
export class PagesModule {}
