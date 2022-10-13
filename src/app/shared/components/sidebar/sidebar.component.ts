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
      channels: [
        {
          pageId: 'career-site-bot',
          channel: 'web',
          heading: 'CMP_CAREERS_SITE_BOT',
        },
        {
          pageId: 'facebook-bot',
          channel: 'facebook',
          heading: 'CMP_FACEBOOK_BOT',
        },
        {
          pageId: 'cx-sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
        },
      ],
    },
    {
      heading: 'CMP_EMPLOYEE_EXPERIENCE',
      experienceType: 'ex',
      channels: [
        {
          channel: 'web',
          heading: 'CMP_EMPLOYEE_SITE',
          pageId: 'employee-site-bot',
        },
        {
          pageId: 'msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
        {
          pageId: 'ex-sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
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
    // this.utilsService.getDistinctLocale(this.refNum, 'cx').then((data: any) => {
    //   data.locales = this.utilsService.getDropdownFormatList(
    //     data.locales,
    //     'displayText'
    //   );

    //   this.locales = data.locales;
    //   debugger
    // });
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
            : 'SS';
          return experience;
        });
      });
  }
}
