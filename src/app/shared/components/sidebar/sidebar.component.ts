import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { Channels } from 'src/app/shared/enums/channels.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SharedService } from '../../shared.service';
import { map } from 'rxjs';
import { BaseComponent } from 'src/app/layouts/base/base.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input('isLocaleListPage') public isLocaleListPage!: boolean;
  @Input('parentMfe') public parentMfe!: string;
  @Input('refNum') public refNum!: string | null;

  // refNum!: string | null;
  locales: any;
  isDataLoaded: boolean = false;
  areLocalesLoaded!: boolean;
  routeSubscription: any;
  defaultAccordionItem!: string | undefined;
  currentExperienceType!: string | undefined;

  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private utilsService: UtilsService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.routeSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let urlArray = event.url.split('?')[0].split('/');
        this.defaultAccordionItem = urlArray.pop();
        this.currentExperienceType = urlArray.pop();
        if (
          this.defaultAccordionItem == '/' ||
          this.defaultAccordionItem == '/locales' ||
          this.defaultAccordionItem == 'locales'
        ) {
          this.isLocaleListPage = true;
        }
        // else {
        //   this.isLocaleListPage = false;
        // }
      }
    });
    this.defaultAccordionItem = 'career-site-bot';
    this.currentExperienceType = 'cx';
    if (localStorage.getItem('channel')) {
      let currentChannel = localStorage.getItem('channel');
      if (Object.keys(Channels).includes(`${currentChannel}`))
        localStorage.setItem('channel', this.defaultAccordionItem);
    }
  }

  data: any = [
    {
      heading: 'CMP_CANDIDATE_EXPERIENCE',
      experienceType: 'cx',
      svg: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.75 0.75H1.25C0.973437 0.75 0.75 0.973437 0.75 1.25V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V1.25C13.25 0.973437 13.0266 0.75 12.75 0.75ZM1.875 1.875H4V12.125H1.875V1.875ZM12.125 12.125H5V5H12.125V12.125ZM5 4V1.875H12.125V4H5Z' fill='#1C2024'/></svg>",
      channels: [
        {
          pageId: 'career-site-bot',
          channel: 'web',
          heading: 'CMP_CAREERS_SITE_BOT',
        },
        {
          pageId: 'candidate-facebook-bot',
          channel: 'facebook',
          heading: 'CMP_FACEBOOK_BOT',
        },
        {
          pageId: 'candidate-sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
        },
      ],
    },
    {
      heading: 'CMP_EMPLOYEE_EXPERIENCE',
      experienceType: 'ex',
      svg: "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.75 4.125C10.75 4.05625 10.6938 4 10.625 4H4.625C4.55625 4 4.5 4.05625 4.5 4.125V4.875C4.5 4.94375 4.55625 5 4.625 5H10.625C10.6938 5 10.75 4.94375 10.75 4.875V4.125ZM10.625 6.25H4.625C4.55625 6.25 4.5 6.30625 4.5 6.375V7.125C4.5 7.19375 4.55625 7.25 4.625 7.25H10.625C10.6938 7.25 10.75 7.19375 10.75 7.125V6.375C10.75 6.30625 10.6938 6.25 10.625 6.25ZM7.5 8.5H4.625C4.55625 8.5 4.5 8.55625 4.5 8.625V9.375C4.5 9.44375 4.55625 9.5 4.625 9.5H7.5C7.56875 9.5 7.625 9.44375 7.625 9.375V8.625C7.625 8.55625 7.56875 8.5 7.5 8.5ZM6.75 13.3125H3.25V2.3125H12V7.6875C12 7.75625 12.0563 7.8125 12.125 7.8125H13C13.0688 7.8125 13.125 7.75625 13.125 7.6875V1.6875C13.125 1.41094 12.9016 1.1875 12.625 1.1875H2.625C2.34844 1.1875 2.125 1.41094 2.125 1.6875V13.9375C2.125 14.2141 2.34844 14.4375 2.625 14.4375H6.75C6.81875 14.4375 6.875 14.3813 6.875 14.3125V13.4375C6.875 13.3687 6.81875 13.3125 6.75 13.3125ZM12.325 12.15C12.7781 11.7391 13.0625 11.1453 13.0625 10.4844C13.0625 9.24219 12.0547 8.23438 10.8125 8.23438C9.57031 8.23438 8.5625 9.24219 8.5625 10.4844C8.5625 11.1453 8.84688 11.7391 9.3 12.15C8.40938 12.6578 7.79688 13.5984 7.75 14.6828C7.74688 14.7531 7.80469 14.8125 7.875 14.8125H8.62656C8.69219 14.8125 8.74688 14.7609 8.75156 14.6938C8.8125 13.6125 9.71406 12.75 10.8125 12.75C11.9109 12.75 12.8125 13.6125 12.8734 14.6938C12.8766 14.7594 12.9313 14.8125 12.9984 14.8125H13.75C13.8219 14.8125 13.8781 14.7531 13.875 14.6828C13.8297 13.5969 13.2156 12.6578 12.325 12.15ZM10.8125 9.23438C11.5031 9.23438 12.0625 9.79375 12.0625 10.4844C12.0625 11.175 11.5031 11.7344 10.8125 11.7344C10.1219 11.7344 9.5625 11.175 9.5625 10.4844C9.5625 9.79375 10.1219 9.23438 10.8125 9.23438Z' fill='#1C2024'/></svg>",
      channels: [
        {
          channel: 'web',
          heading: 'CMP_EMPLOYEE_SITE',
          pageId: 'employee-site-bot',
        },
        {
          pageId: 'employee-msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
        {
          pageId: 'employee-sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
        },
      ],
    },
    {
      heading: 'CMP_RECRUITER_EXPERIENCE',
      experienceType: 'rx',
      svg: "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.75 1.75H2.25C1.97344 1.75 1.75 1.97344 1.75 2.25V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V2.25C14.25 1.97344 14.0266 1.75 13.75 1.75ZM13.125 13.125H2.875V2.875H13.125V13.125ZM7.6875 6.25H10.5625C10.6313 6.25 10.6875 6.19375 10.6875 6.125V5.375C10.6875 5.30625 10.6313 5.25 10.5625 5.25H7.6875C7.61875 5.25 7.5625 5.30625 7.5625 5.375V6.125C7.5625 6.19375 7.61875 6.25 7.6875 6.25ZM7.6875 8.5H10.5625C10.6313 8.5 10.6875 8.44375 10.6875 8.375V7.625C10.6875 7.55625 10.6313 7.5 10.5625 7.5H7.6875C7.61875 7.5 7.5625 7.55625 7.5625 7.625V8.375C7.5625 8.44375 7.61875 8.5 7.6875 8.5ZM7.6875 10.75H10.5625C10.6313 10.75 10.6875 10.6938 10.6875 10.625V9.875C10.6875 9.80625 10.6313 9.75 10.5625 9.75H7.6875C7.61875 9.75 7.5625 9.80625 7.5625 9.875V10.625C7.5625 10.6938 7.61875 10.75 7.6875 10.75ZM5.3125 5.75C5.3125 5.91576 5.37835 6.07473 5.49556 6.19194C5.61277 6.30915 5.77174 6.375 5.9375 6.375C6.10326 6.375 6.26223 6.30915 6.37944 6.19194C6.49665 6.07473 6.5625 5.91576 6.5625 5.75C6.5625 5.58424 6.49665 5.42527 6.37944 5.30806C6.26223 5.19085 6.10326 5.125 5.9375 5.125C5.77174 5.125 5.61277 5.19085 5.49556 5.30806C5.37835 5.42527 5.3125 5.58424 5.3125 5.75ZM5.3125 8C5.3125 8.16576 5.37835 8.32473 5.49556 8.44194C5.61277 8.55915 5.77174 8.625 5.9375 8.625C6.10326 8.625 6.26223 8.55915 6.37944 8.44194C6.49665 8.32473 6.5625 8.16576 6.5625 8C6.5625 7.83424 6.49665 7.67527 6.37944 7.55806C6.26223 7.44085 6.10326 7.375 5.9375 7.375C5.77174 7.375 5.61277 7.44085 5.49556 7.55806C5.37835 7.67527 5.3125 7.83424 5.3125 8ZM5.3125 10.25C5.3125 10.4158 5.37835 10.5747 5.49556 10.6919C5.61277 10.8092 5.77174 10.875 5.9375 10.875C6.10326 10.875 6.26223 10.8092 6.37944 10.6919C6.49665 10.5747 6.5625 10.4158 6.5625 10.25C6.5625 10.0842 6.49665 9.92527 6.37944 9.80806C6.26223 9.69085 6.10326 9.625 5.9375 9.625C5.77174 9.625 5.61277 9.69085 5.49556 9.80806C5.37835 9.92527 5.3125 10.0842 5.3125 10.25Z' fill='#1C2024'/></svg>",
      channels: [
        {
          pageId: 'rx-msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.loadLocales();
    if (!localStorage.getItem('channel')) {
      if (this.data[0]?.channels[0]?.channel)
        localStorage.setItem('channel', this.data[0]?.channels[0]?.channel);
    }
    console.log(this.data[0].channels[0].channel);
    this.addTranslation();
    this.refNum = localStorage.getItem('refNum') as string;
    this.broadcastService
      .on(AppEventType.SELECTED_LOCALE_EVENT)
      .subscribe((event: any) => {
        let add = location.pathname;
        add = add.replace('locales', '');
        add = add.slice(1);
        console.log(add);
        // this.router.config.push({
        //   path: `${add}configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
        //   loadChildren: () =>
        //     import('../../../pages/configurations/configurations.module').then(
        //       m => {
        //         console.log('Normal ROUTE');
        //         return m.ConfigurationsModule;
        //       }
        //     ),
        // });
        this.router.config.push({
          path: `${add}configuration/:exp/:pageId`,
          component: BaseComponent,
          loadChildren: () =>
            import('../../../pages/configurations/configurations.module').then(
              m => {
                return m.ConfigurationsModule;
              }
            ),
        });
        console.log(this.router.config);
        this.router.navigate([
          `${add}/configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
        ]);
      });

    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT)
      .subscribe((event: any) => {
        if (event.payload.channel)
          localStorage.setItem('channel', event.payload.channel);
        if (event?.payload?.selectedPageId) {
          console.log(event.payload);
          localStorage.setItem('experienceType', event.payload.accordionId);
          if (event.payload.channel)
            localStorage.setItem('channel', event.payload.channel);
          let currentUrl = location.pathname;
          currentUrl = currentUrl.replace('locales', '');
          currentUrl = currentUrl.slice(1);
          let currentUrlArray = currentUrl.split('/');
          // if(Object.keys(Channels).includes(currentUrl[currentUrl.length-1])){

          // }
          currentUrlArray = currentUrlArray.slice(
            0,
            currentUrlArray.length - 2
          );
          currentUrlArray.push(event.payload.accordionId);
          currentUrlArray.push(event.payload.selectedPageId);
          currentUrl = currentUrlArray.join('/');
          console.log(currentUrl);
          if ((this.parentMfe = 'dashboard')) {
            this.router.config.push(
              {
                path: `${currentUrl}`,
              },
              {
                path: `mfe-dashboard/${currentUrl}`,
              },
              {
                path: `${location.pathname}/mfe-dashboard/${currentUrl}`,
              }
            );
            console.log(this.router.config);
            if (currentUrl.includes('mfe-dashboard')) {
              this.router.navigate([`${currentUrl}`]);
            } else {
              this.router.navigate([
                `${location.pathname}/mfe-dashboard/${currentUrl}`,
              ]);
            }
            // { relativeTo: this.route }
          } else {
            this.router.config.push({
              // path: `configuration/${event.payload.accordionId}/${event?.payload?.selectedPageId}`,
              path: `${currentUrl}`,
              component: BaseComponent,
              loadChildren: () =>
                import(
                  '../../../pages/configurations/configurations.module'
                ).then(m => {
                  return m.ConfigurationsModule;
                }),
            });
            console.log(this.router.config);
            this.router.navigate(
              [
                `../../${event.payload.accordionId}/${event?.payload?.selectedPageId}`,
              ],
              { relativeTo: this.route }
            );
          }
        }
      });
  }

  loadLocales() {
    this.areLocalesLoaded = false;
    this.refNum = localStorage.getItem('refNum');
    this.utilsService.getDistinctLocale(this.refNum, 'cx').then((data: any) => {
      data.locales = this.utilsService.getDropdownFormatList(
        data.locales,
        'displayText'
      );
      this.locales = data.locales;
      this.areLocalesLoaded = true;
      if (!localStorage.getItem('locale'))
        localStorage.setItem('locale', this.locales[0].locale);
    });
  }

  addTranslation() {
    this.sharedService
      .getI18nValues()
      .pipe(map((data: any) => data))
      .subscribe((i18n: any) => {
        this.data = this.data.map((experience: any) => {
          experience.channels = experience.channels.map((channel: any) => {
            channel.heading = i18n[channel?.heading]
              ? i18n[channel?.heading]
              : channel?.heading;
            this.isDataLoaded = true;
            return channel;
          });
          experience.heading = i18n[experience?.heading]
            ? i18n[experience?.heading]
            : experience?.heading;
          return experience;
        });
      });
  }
}
