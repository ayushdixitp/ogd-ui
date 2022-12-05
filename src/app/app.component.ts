import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'chatbot-management-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private sharedService: SharedService, private router: Router) {}
  @Input() refNum!: string;
  @Input() roleAccess!: string;
  title = 'chatbot-management-app';

  ngOnInit() {
    let oldRoute: string = location.pathname;
    if (this.refNum) this.setRefNum(this.refNum);
    if (this.roleAccess) this.setRole(this.roleAccess);

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
    let oldRoute: string = location.pathname;
    if (this.refNum) this.setRefNum(this.refNum);
  }

  setRefNum(refNum: string) {
    localStorage.setItem('refNum', refNum);
  }

  setRole(role: string) {
    localStorage.setItem('roleAccess', role);
  }

  ngOnDestroy(): void {
    localStorage.setItem('mfe-state', location.pathname);
  }
}
