import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { WebChatbotComponent } from './web-chatbot/web-chatbot.component';
import { LocalesComponent } from './locales/locales.component';
import { SharedModule } from '../shared/shared.module';
import { SearchboxComponent } from '../lib/searchbox/searchbox.component';
import { SearchFilterPipe } from '../shared/pipes/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Provisioning } from './provisioning/provisioning.component';

@NgModule({
  declarations: [
    WebChatbotComponent,
    SearchboxComponent,
    SearchFilterPipe,
    LocalesComponent,
    Provisioning,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PagesModule {}
