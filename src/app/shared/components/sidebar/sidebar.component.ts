import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { NavigationEnd, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { LocalStorageService } from '../../services/localstorage.service';
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
  defaultAccordionItem!: string;

  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private utilsService: UtilsService,
    private localStorageService: LocalStorageService,
    private sharedService: SharedService
  ) {
    this.routeSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.defaultAccordionItem = event.url.slice(1, event.url.length);
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
          pageId: 'provisioning',
          channel: 'whatsapp',
          heading: 'CMP_WHATSAPP_BOT',
        },
        {
          pageId: 'whatsapp-bot',
          channel: 'whatsapp',
          heading: 'CMP_WHATSAPP_BOT',
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
          pageId: 'whatsapp-bot',
          channel: 'whatsapp',
          heading: 'CMP_WHATSAPP_BOT',
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
    this.refNum = this.localStorageService.getLocalStorageItem('refNum');
    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT)
      .subscribe((event: any) => {
        if (event?.payload?.selectedPageId) {
          this.router.navigate([event?.payload?.selectedPageId]);
        }
      });
    this.utilsService.getDistinctLocale(this.refNum, 'cx').then((data: any) => {
      data.locales = this.utilsService.getDropdownFormatList(
        data.locales,
        'displayText'
      );
      console.log(data);
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
            channel.heading = i18n[channel.heading];
            return channel;
          });
          experience.heading = i18n[experience.heading];
          return experience;
        });
      });
    console.log(this.data);
  }
}

// {
// "CMP_CANDIDATE_EXPERIENCE":"Candidate Experience",
// "CMP_CAREERS_SITE_BOT":"Career Site Bot",
// "CMP_WHATSAPP_BOT":"Whatsapp Bot",
// "CMP_SMS_BOT":"SMS bot",
// "CMP_EMPLOYEE_EXPERIENCE":"Employee Experience",
// "CMP_EMPLOYEE_SITE":"Employee Site Bot",
// }
