import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';

const routes: Routes = [
  {
    path: 'ogd',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/ogd/ogd.module').then((m) => {
            return m.OgdModule;
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
