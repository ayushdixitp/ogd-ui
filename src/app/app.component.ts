import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import {
  LoadChildrenCallback,
  Route,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';

@Component({
  selector: 'chatbot-management-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private sharedService: SharedService, private router: Router) {}
  @Input() refNum!: string;
  @Input() bundleName!: string;
  title = 'chatbot-management-app';

  ngOnInit() {
    let oldRoute: string = location.pathname;
    if (this.refNum) this.setRefNum(this.refNum);

    console.log('I am inside app comp.', oldRoute);
    switch (this.bundleName) {
      case 'locale':
        console.log('inside switch', this.bundleName);
        if (oldRoute.includes('/locale')) {
          if (oldRoute[0] == '/') {
            oldRoute = oldRoute.slice(1);
          }
          this.router.config.push({
            path: `${oldRoute}`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/locales/locales.module').then(m => {
                return m.LocalesModule;
              }),
          });
          this.router.navigate([
            `/${this.router.config[this.router.config.length - 1]?.path}`,
          ]);
        } else {
          oldRoute = (location.pathname + '/locales').slice(1);
          oldRoute = oldRoute.replace('//', '/');
          this.router.config.push({
            path: `${oldRoute}`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/locales/locales.module').then(m => {
                console.log('Normal ROUTE');
                return m.LocalesModule;
              }),
          });
          this.router.navigate([`${oldRoute}`]);
        }
        break;
      case 'configurations':
        if (oldRoute[0] == '/') {
          oldRoute = oldRoute.slice(1);
        }

        let currentUrlArray = oldRoute.split('/');
        currentUrlArray = currentUrlArray.slice(0, currentUrlArray.length - 2);
        let currentUrl = currentUrlArray.join('/');
        console.log(currentUrl);
        if (!oldRoute.includes('configuration')) {
          console.log('oldRoute', oldRoute);
          console.log('currentUrl', currentUrl);
          this.router.config.push({
            path: `${oldRoute}/configuration/:exp/:pageId`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/configurations/configurations.module').then(m => {
                console.log('Normal ROUTE');
                return m.ConfigurationsModule;
              }),
          });
          console.log(this.router.config);
          this.router.navigate([
            `${oldRoute}/configuration/cx/career-site-bot`,
          ]);
        } else {
          let channel: string | undefined = oldRoute?.split('/')?.pop();
          if (channel && localStorage.getItem('channel'))
            localStorage.setItem('channel', channel);
          console.log(oldRoute);
          this.router.config.push({
            path: `${currentUrl}/:exp/:pageId`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/configurations/configurations.module').then(m => {
                console.log('Normal ROUTE');
                return m.ConfigurationsModule;
              }),
          });
          console.log(this.router.config);
          if (oldRoute) this.router.navigate([`${oldRoute}`]);
          else {
            localStorage.setItem('channel', 'career-site-bot');
            this.router.navigate([`${currentUrl}/cx/career-site-bot`]);
          }
        }
        break;
      // default: {
      //   if (oldRoute.includes('/locale')) {
      //     if (oldRoute[0] == '/') {
      //       oldRoute = oldRoute.slice(1);
      //     }
      //     this.router.config.push({
      //       path: `${oldRoute}`,
      //       component: BaseComponent,
      //       loadChildren: () =>
      //         import('./pages/locales/locales.module').then(m => {
      //           return m.LocalesModule;
      //         }),
      //     });
      //     this.router.navigate([
      //       `/${this.router.config[this.router.config.length - 1]?.path}`,
      //     ]);
      //   } else {
      //     oldRoute = (location.pathname + '/locales').slice(1);
      //     oldRoute = oldRoute.replace('//', '/');
      //     this.router.config.push({
      //       path: `${oldRoute}`,
      //       component: BaseComponent,
      //       loadChildren: () =>
      //         import('./pages/locales/locales.module').then(m => {
      //           console.log('Normal ROUTE');
      //           return m.LocalesModule;
      //         }),
      //     });
      //     this.router.navigate([`${oldRoute}`]);
      //   }
      //   break;
      // }
    }

    // if (localStorage.getItem('mfe-state')) {
    //   console.log(localStorage.getItem('mfe-state'));
    // } else {
    //   if (oldRoute.includes('/locale')) {
    //     if (oldRoute[0] == '/') {
    //       oldRoute = oldRoute.slice(1);
    //     }
    //     this.router.config.push({
    //       path: `${oldRoute}`,
    //       component: BaseComponent,
    //       loadChildren: () =>
    //         import('./pages/locales/locales.module').then(m => {
    //           console.log('Normal ROUTE');
    //           return m.LocalesModule;
    //         }),
    //     });
    //     this.router.navigate([
    //       `/${this.router.config[this.router.config.length - 1]?.path}`,
    //     ]);
    //   } else if (oldRoute.includes('/configuration')) {
    //     if (oldRoute[0] == '/') {
    //       oldRoute = oldRoute.slice(1);
    //     }
    //     let channel: string | undefined = oldRoute?.split('/')?.pop();
    //     if (channel) localStorage.setItem('channel', channel);

    //     let currentUrlArray = oldRoute.split('/');
    //     currentUrlArray = currentUrlArray.slice(0, currentUrlArray.length - 2);
    //     let currentUrl = currentUrlArray.join('/');
    //     console.log(oldRoute);
    //     this.router.config.push({
    //       path: `${currentUrl}/:exp/:pageId`,
    //       component: BaseComponent,
    //       loadChildren: () =>
    //         import('./pages/configurations/configurations.module').then(m => {
    //           console.log('Normal ROUTE');
    //           return m.ConfigurationsModule;
    //         }),
    //     });
    //     this.router.navigate([`${oldRoute}`]);
    //   } else {
    //     oldRoute = (location.pathname + '/locales').slice(1);
    //     oldRoute = oldRoute.replace('//', '/');
    //     this.router.config.push({
    //       path: `${oldRoute}`,
    //       component: BaseComponent,
    //       loadChildren: () =>
    //         import('./pages/locales/locales.module').then(m => {
    //           console.log('Normal ROUTE');
    //           return m.LocalesModule;
    //         }),
    //     });
    //     this.router.navigate([`${oldRoute}`]);
    //   }
    // }
  }

  ngOnChanges(): void {
    console.log('inside changes');
    let oldRoute: string = location.pathname;
    console.log('I am inside app comp.', oldRoute);
    if (this.refNum) this.setRefNum(this.refNum);
    switch (this.bundleName) {
      case 'locale':
        console.log('inside switch', this.bundleName);
        if (oldRoute.includes('/locale')) {
          if (oldRoute[0] == '/') {
            oldRoute = oldRoute.slice(1);
          }
          this.router.config.push({
            path: `${oldRoute}`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/locales/locales.module').then(m => {
                return m.LocalesModule;
              }),
          });
          this.router.navigate([
            `/${this.router.config[this.router.config.length - 1]?.path}`,
          ]);
        } else {
          oldRoute = (location.pathname + '/locales').slice(1);
          oldRoute = oldRoute.replace('//', '/');
          this.router.config.push({
            path: `${oldRoute}`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/locales/locales.module').then(m => {
                console.log('Normal ROUTE');
                return m.LocalesModule;
              }),
          });
          this.router.navigate([`${oldRoute}`]);
        }
        break;
      case 'configurations':
        if (oldRoute[0] == '/') {
          oldRoute = oldRoute.slice(1);
        }

        let currentUrlArray = oldRoute.split('/');
        currentUrlArray = currentUrlArray.slice(0, currentUrlArray.length - 2);
        let currentUrl = currentUrlArray.join('/');
        console.log(currentUrl);
        if (!oldRoute.includes('configuration')) {
          console.log('oldRoute', oldRoute);
          console.log('currentUrl', currentUrl);
          this.router.config.push({
            path: `${oldRoute}/configuration/:exp/:pageId`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/configurations/configurations.module').then(m => {
                console.log('Normal ROUTE');
                return m.ConfigurationsModule;
              }),
          });
          console.log(this.router.config);
          this.router.navigate([
            `${oldRoute}/configuration/cx/career-site-bot`,
          ]);
        } else {
          let channel: string | undefined = oldRoute?.split('/')?.pop();
          if (channel && localStorage.getItem('channel'))
            localStorage.setItem('channel', channel);
          console.log(oldRoute);
          this.router.config.push({
            path: `${currentUrl}/:exp/:pageId`,
            component: BaseComponent,
            loadChildren: () =>
              import('./pages/configurations/configurations.module').then(m => {
                console.log('Normal ROUTE');
                return m.ConfigurationsModule;
              }),
          });
          console.log(this.router.config);
          if (oldRoute) this.router.navigate([`${oldRoute}`]);
          else {
            localStorage.setItem('channel', 'career-site-bot');
            this.router.navigate([`${currentUrl}/cx/career-site-bot`]);
          }
        }
        break;
    }
  }

  setRefNum(refNum: string) {
    localStorage.setItem('refNum', refNum);
  }

  ngOnDestroy(): void {
    localStorage.setItem('mfe-state', location.pathname);
  }
}
