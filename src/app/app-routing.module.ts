import { NgModule } from '@angular/core';
import {
  LoadChildrenCallback,
  Route,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LocaleListComponent } from './pages/locale-list/locale-list.component';
import { LocalesModule } from './pages/locales/locales.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/locales',
  //   pathMatch: 'full',
  // },
  {
    path: 'locales',
    component: LocaleListComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/locale-list/locale-list.module').then(
            m => m.LocaleListModule
          ),
      },
    ],
  },
  {
    path: ':mfe/configuration/:experience/:channel',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/configurations/configurations.module').then(m => {
            return m.ConfigurationsModule;
          }),
      },
    ],
  },
  {
    path: 'configuration/:experience/:channel',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/configurations/configurations.module').then(m => {
            return m.ConfigurationsModule;
          }),
      },
    ],
  },
  {
    path: 'configuration/:experience/:channel',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/locale-list/locale-list.module').then(m => {
            return m.LocaleListModule;
          }),
      },
    ],
  },
  {
    path: 'mfe-config/:experience/:channel',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(m => {
            return m.DashboardModule;
          }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // logic for refresh handling
    // let oldRoute: string = location.pathname;
    // if (oldRoute.includes('/locale')) {
    //   if (oldRoute[0] == '/') {
    //     oldRoute = oldRoute.slice(1);
    //   }
    //   this.router.config.push({
    //     path: `${oldRoute}`,
    //     component: LocaleListComponent,
    //     loadChildren: () =>
    //       import('./pages/configurations/configurations.module').then(m => {
    //         console.log('Normal ROUTE');
    //         return m.ConfigurationsModule;
    //       }),
    //   });
    //   this.router.navigate([
    //     `/${this.router.config[this.router.config.length - 1]?.path}`,
    //   ]);
    // } else if (oldRoute.includes('/configuration')) {
    //   if (oldRoute[0] == '/') {
    //     oldRoute = oldRoute.slice(1);
    //   }
    //   let channel: string | undefined = oldRoute?.split('/')?.pop();
    //   if (channel) localStorage.setItem('channel', channel);
    //   let currentUrlArray = oldRoute.split('/');
    //   currentUrlArray = currentUrlArray.slice(0, currentUrlArray.length - 2);
    //   let currentUrl = currentUrlArray.join('/');
    //   console.log(oldRoute);
    //   this.router.config.push({
    //     path: `${currentUrl}/:exp/:pageId`,
    //     component: BaseComponent,
    //     loadChildren: () =>
    //       import('./pages/configurations/configurations.module').then(m => {
    //         console.log('Normal ROUTE');
    //         return m.ConfigurationsModule;
    //       }),
    //   });
    //   this.router.navigate([`${oldRoute}`]);
    // } else {
    //   oldRoute = location.pathname.slice(1);
    //   oldRoute = oldRoute.replace('//', '/');
    //   this.router.config.push({
    //     path: `${oldRoute}`,
    //     component: LocaleListComponent,
    //     loadChildren: () =>
    //       import('./pages/configurations/configurations.module').then(m => {
    //         console.log('Normal ROUTE');
    //         return m.ConfigurationsModule;
    //       }),
    //   });
    //   this.router.navigate([`${oldRoute}`]);
    // }
  }
}
