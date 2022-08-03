import { CommonModule } from '@angular/common';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './layouts/base/base.component';
import { CleanComponent } from './layouts/clean/clean.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, CleanComponent, BaseComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('chatbot-management-app', el);
  }
}
