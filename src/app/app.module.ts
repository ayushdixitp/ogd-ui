import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './lib/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';


@NgModule({
  declarations: [AppComponent, CheckboxComponent, SearchFilterPipe],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('chatbot-management-app', el);
  }
  ngDoBootstrap() {}
}
