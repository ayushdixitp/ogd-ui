import { CommonModule } from '@angular/common';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './layouts/base/base.component';
import { CleanComponent } from './layouts/clean/clean.component';
import { AccordionComponent } from './lib/accordion/accordion.component';
import { WebChatbotComponent } from './pages/web-chatbot/web-chatbot.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, BaseComponent, CleanComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, SharedModule, AccordionComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(WebChatbotComponent, { injector });
    customElements.define('chatbot-management-app', el);
  }
}
