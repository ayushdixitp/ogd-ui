import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Input() refNum!: string;
  @Input() roleAccess!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
    // if (!localStorage.getItem('refNum')) {
    if (this.refNum) {
      localStorage.setItem('refNum', this.refNum);
    }
    if (this.roleAccess) {
      localStorage.setItem('roleAccess', this.roleAccess);
    }

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
    // }
    // console.log("dashboard comp.");
    // localStorage.setItem('refNum', this.refNum);
    // console.log(location.pathname);
    // let currentUrl = location.pathname.slice(1);
    // if(currentUrl[currentUrl.length] == '/')
    //   currentUrl = currentUrl.slice(0,currentUrl.length-1);
    // if(!currentUrl.includes('dashboard-configurations')){
    //   this.router.config.push({})
    // }
    // console.log(this.router.config);
  }

  ngOnDestroy(): void {
    localStorage.setItem('channel', 'web');
    localStorage.setItem('experienceType', 'cx');
    console.log('destroyed');
  }
}
