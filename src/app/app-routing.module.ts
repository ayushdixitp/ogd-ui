import { CommonModule } from '@angular/common';
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
import { LocalesComponent } from './pages/locales/locales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/locales',
    pathMatch: 'full',
  },
  {
    path: 'locales',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/locales/locales.module').then(m => m.LocalesModule),
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
            console.log('MFE ROUTE');
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
            console.log('Normal ROUTE');
            return m.ConfigurationsModule;
          }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // logic for maitaining state
    if (localStorage.getItem('mfe-state')) {
      console.log(localStorage.getItem('mfe-state'));
    } else {
      // logic for refresh handling
      let oldRoute: string = location.pathname;
      if (oldRoute.includes('/locale')) {
        if (oldRoute[0] == '/') {
          oldRoute = oldRoute.slice(1);
        }
        this.router.config.push({
          path: `${oldRoute}`,
          component: BaseComponent,
          loadChildren: () =>
            import('./pages/locales/locales.module').then(m => {
              console.log('Normal ROUTE');
              return m.LocalesModule;
            }),
        });
        this.router.navigate([
          `/${this.router.config[this.router.config.length - 1]?.path}`,
        ]);
      } else if (oldRoute.includes('/configuration')) {
        if (oldRoute[0] == '/') {
          oldRoute = oldRoute.slice(1);
        }
        let channel: string | undefined = oldRoute?.split('/')?.pop();
        if (channel) localStorage.setItem('channel', channel);

        let currentUrlArray = oldRoute.split('/');
        currentUrlArray = currentUrlArray.slice(0, currentUrlArray.length - 2);
        let currentUrl = currentUrlArray.join('/');
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

        // this.router.config.push({
        //   path: `${oldRoute}`,
        //   component: BaseComponent,
        //   loadChildren: () =>
        //     import('./pages/configurations/configurations.module').then(m => {
        //       console.log('Normal ROUTE');
        //       return m.ConfigurationsModule;
        //     }),
        // });
        this.router.navigate([`${oldRoute}`]);
        // this.router.navigate(['configuration'])
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
    }
  }
}
