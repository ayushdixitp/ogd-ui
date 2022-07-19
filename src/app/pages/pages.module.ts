import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { WebChatbotComponent } from './web-chatbot/web-chatbot.component';
import { LocalesComponent } from './locales/locales.component';
import { SharedModule } from '../shared/shared.module';
import { SearchboxComponent } from '../lib/searchbox/searchbox.component';
import { SearchFilterPipe } from '../shared/pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WebChatbotComponent,
    SearchboxComponent,
    SearchFilterPipe,
    LocalesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
})
export class PagesModule {}
