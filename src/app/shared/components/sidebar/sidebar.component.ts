import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { NavigationEnd, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SharedService } from '../../shared.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input('isLocaleListPage') public isLocaleListPage!: boolean;

  refNum!: string | null;
  locales: any;
  isDataLoaded: boolean = false;
  routeSubscription: any;
  defaultAccordionItem!: string | undefined;

  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private utilsService: UtilsService,
    private sharedService: SharedService
  ) {
    this.routeSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.defaultAccordionItem = event.url.split('?')[0].split('/').pop();
        if (event.url == '/' || event.url == '/locales') {
          this.isLocaleListPage = true;
        } else {
          this.isLocaleListPage = false;
        }
      }
    });
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
          pageId: 'msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
        {
          pageId: 'sms-bot',
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
          pageId: 'facebook-bot',
          channel: 'facebook',
          heading: 'CMP_FACEBOOK_BOT',
        },
        {
          pageId: 'msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
        {
          pageId: 'sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.addTranslation();
    this.refNum = localStorage.getItem('refNum');
    this.broadcastService
      .on(AppEventType.SELECTED_LOCALE_EVENT)
      .subscribe((event: any) => {
        this.router.navigate([
          `/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
        ]);
      });
    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT)
      .subscribe((event: any) => {
        localStorage.setItem('channel', event.payload.channel);
        if (event?.payload?.selectedPageId) {
          localStorage.setItem('experienceType', event.payload.accordionId);
          this.router.navigate([
            `${event.payload.accordionId}/${event?.payload?.selectedPageId}`,
          ]);
        }
      });
    this.utilsService.getDistinctLocale(this.refNum, 'cx').then((data: any) => {
      data.locales = this.utilsService.getDropdownFormatList(
        data.locales,
        'displayText'
      );

      this.locales = data.locales;
      this.isDataLoaded = true;
    });
  }

  addTranslation() {
    this.sharedService
      .getI18nValues()
      .pipe(map((data: any) => data.record))
      .subscribe((i18n: any) => {
        this.data = this.data.map((experience: any) => {
          experience.channels = experience.channels.map((channel: any) => {
            channel.heading = i18n[channel.heading]
              ? i18n[channel.heading]
              : channel.heading;
            return channel;
          });
          experience.heading = i18n[experience.heading]
            ? i18n[experience.heading]
            : 'SS';
          return experience;
        });
      });
  }
}
