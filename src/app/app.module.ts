import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './layouts/base/base.component';
import { CleanComponent } from './layouts/clean/clean.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, CleanComponent, BaseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector, private router: Router) {
    const el = createCustomElement(AppComponent, { injector });
    // const locales = createCustomElement(LocaleListComponent, { injector });
    // const dash = createCustomElement(DashboardComponent, { injector });
    // customElements.define('chatbot-management-app', el);
    // customElements.define('p-locales', locales);
    // customElements.define('dash-mfe', dash);
  }
  public ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('chatbot-management-app')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
