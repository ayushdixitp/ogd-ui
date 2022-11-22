import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Input() refNum!: string;
  @Input() roleAccess!: string;
  input: any;

  @Input()
  get mfeInput(): any {
    return this.input;
  }
  set mfeInput(item: any) {
    if (typeof item == 'string') this.input = JSON.parse(item);
    else this.input = item;
    if (this.input) this.initialization();
  }

  isDataLoaded: boolean = false;

  constructor(private router: Router) {
    let currentUrl = location.pathname;
    currentUrl = currentUrl[0] == '/' ? currentUrl.slice(1) : currentUrl;
    console.log(`currentUrl => ${currentUrl}`);
    if (!currentUrl.includes('mfe-dashboard')) {
      this.router.config.push(
        {
          path: `${currentUrl}mfe-dashboard`,
          children: [
            {
              path: '**',
            },
          ],
        },
        {
          path: `${currentUrl}/mfe-dashboard`,
          children: [
            {
              path: '**',
            },
          ],
        }
      );
      // for the first time it comes here so setting up default channels
      // here we will call the api to check for the available channels for that specfic clients
      //  the first channel will be kept here
      localStorage.setItem('channel', 'web');
      localStorage.setItem('experienceType', 'cx');
      this.router.navigate([`${currentUrl}/mfe-dashboard/cx/career-site-bot`]);
    } else {
      this.router.config.push({
        path: `${currentUrl}`,
        children: [
          {
            path: '**',
          },
        ],
      });
      this.router.navigate([`${currentUrl}`]);
    }
  }

  ngOnInit(): void {
    let currentUrl = location.pathname;
    currentUrl = currentUrl[0] == '/' ? currentUrl.slice(1) : currentUrl;
    console.log(`currentUrl => ${currentUrl}`);
    if (!currentUrl.includes('mfe-dashboard')) {
      this.router.config.push(
        {
          path: `${currentUrl}mfe-dashboard`,
          children: [
            {
              path: '**',
            },
          ],
        },
        {
          path: `${currentUrl}/mfe-dashboard`,
          children: [
            {
              path: '**',
            },
          ],
        }
      );
      // for the first time it comes here so setting up default channels
      // here we will call the api to check for the available channels for that specfic clients
      //  the first channel will be kept here
      localStorage.setItem('channel', 'web');
      localStorage.setItem('experienceType', 'cx');
      this.router.navigate([`${currentUrl}/mfe-dashboard/cx/career-site-bot`]);
    } else {
      this.router.config.push({
        path: `${currentUrl}`,
        children: [
          {
            path: '**',
          },
        ],
      });
      this.router.navigate([`${currentUrl}`]);
    }
  }

  initialization() {
    if (this.input.refNum) {
      localStorage.setItem('refNum', this.input.refNum);
      this.refNum = this.input.refNum;
    }
    if (this.input.roleAccess) {
      localStorage.setItem('roleAccess', this.input.roleAccess);
    }

    if (this.input.updatedBy) {
      localStorage.setItem('updatedBy', JSON.stringify(this.input.updatedBy));
    }

    if (this.input.authConfig) {
      localStorage.setItem('authConfig', JSON.stringify(this.input.authConfig));
    }
    this.isDataLoaded = true;
  }

  ngOnDestroy(): void {
    localStorage.setItem('channel', 'web');
    localStorage.setItem('experienceType', 'cx');
    console.log('destroyed');
  }
}
