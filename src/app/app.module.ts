import { CommonModule } from '@angular/common';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './layouts/base/base.component';
import { CleanComponent } from './layouts/clean/clean.component';
import { WebChatbotComponent } from './pages/web-chatbot/web-chatbot.component';

@NgModule({
  declarations: [AppComponent, CleanComponent, BaseComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(WebChatbotComponent, { injector });
    customElements.define('chatbot-management-app', el);
  }
}
