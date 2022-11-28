import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { Channels } from 'src/app/shared/enums/channels.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SharedService } from '../../shared.service';
import { map } from 'rxjs';
import { BaseComponent } from 'src/app/layouts/base/base.component';
import { AppEvent } from '../../services/broadcast.event.class';
import { SidebarBase } from './sidebar-base';
import { CommonConstant } from '../../constants/common-constants';

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
  checking: any;
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
      }
    });
    // this.defaultAccordionItem = 'career-site-bot';
    this.currentExperienceType = 'cx';
    if (localStorage.getItem('channel')) {
      let currentChannel = localStorage.getItem('channel');
      if (Object.keys(Channels).includes(`${currentChannel}`))
        localStorage.setItem('channel', this.defaultAccordionItem as string);
    }
  }

  data: any = [];

  ngOnInit(): void {
    this.sharedService.getSidebarData().subscribe(data => {
      // this.checking = new SidebarBase(data.customerPipeline).finalArray;
      if (
        (localStorage.getItem('roleAccess') as string) ==
        CommonConstant.INTERNAL
      ) {
        this.checking = new SidebarBase(data.masterPipeline).finalArray;
      } else {
        this.checking = new SidebarBase(data?.customerPipeline).finalArray;
      }
      this.data = this.checking;
      this.currentExperienceType = this.data[0].experienceType;
      if (!localStorage.getItem('pageId')) {
        this.defaultAccordionItem = this.data[0]?.channels[0]?.pageId;
        localStorage.setItem('pageId', this.data[0]?.channels[0]?.pageId);
      } else {
        this.defaultAccordionItem = localStorage.getItem('pageId') as string;
      }
      if (!localStorage.getItem('experienceType'))
        localStorage.setItem('experienceType', this.data[0]?.experienceType);
      if (!localStorage.getItem('channel'))
        localStorage.setItem('channel', this.data[0]?.channels[0]?.channel);
      let currentUrl = location.pathname;
      currentUrl = currentUrl[0] == '/' ? currentUrl.slice(1) : currentUrl;
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
        localStorage.setItem('pageId', this.data[0]?.channels[0]?.pageId);
        this.router.navigate([
          `${currentUrl}/mfe-dashboard/${this.data[0]?.experienceType}/${this.data[0]?.channels[0]?.pageId}`,
        ]);
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
      if (!localStorage.getItem('channel')) {
        if (this.data[0]?.channels[0]?.channel)
          localStorage.setItem('channel', this.data[0]?.channels[0]?.channel);
      }
      this.loadLocales();
      this.refNum = localStorage.getItem('refNum') as string;
      this.broadcastService
        .on(AppEventType.SELECTED_LOCALE_EVENT)
        .subscribe((event: any) => {
          let add = location.pathname;
          add = add.replace('locales', '');
          add = add.slice(1);
          this.router.config.push({
            path: `${add}configuration/:exp/:pageId`,
            component: BaseComponent,
            loadChildren: () =>
              import(
                '../../../pages/configurations/configurations.module'
              ).then(m => {
                return m.ConfigurationsModule;
              }),
          });
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
              if (currentUrl.includes('mfe-dashboard')) {
                this.router.navigate([`${currentUrl}`]);
              } else {
                this.router.navigate([
                  `${location.pathname}/mfe-dashboard/${currentUrl}`,
                ]);
              }
            } else {
              this.router.config.push({
                path: `${currentUrl}`,
                component: BaseComponent,
                loadChildren: () =>
                  import(
                    '../../../pages/configurations/configurations.module'
                  ).then(m => {
                    return m.ConfigurationsModule;
                  }),
              });
              this.router.navigate(
                [
                  `../../${event.payload.accordionId}/${event?.payload?.selectedPageId}`,
                ],
                { relativeTo: this.route }
              );
            }
          }
        });
    });
  }

  loadLocales() {
    // for using orignal cdn
    this.areLocalesLoaded = true;
    this.refNum = localStorage.getItem('refNum');
    this.addTranslation();
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.LOCALES_LOADED_EVENT)
    );
    // // commented can be used for running using local cdn files
    // this.areLocalesLoaded = false;
    // this.refNum = localStorage.getItem('refNum');
    // this.utilsService.getDistinctLocale(this.refNum, 'cx').then((data: any) => {
    //   data.locales = this.utilsService.getDropdownFormatList(
    //     data.locales,
    //     'displayText'
    //   );
    //   this.locales = data.locales;
    //   localStorage.setItem('customerName', data.customerName);
    //   this.areLocalesLoaded = true;
    //   if (!localStorage.getItem('LOCALE')) {
    //     localStorage.setItem('LOCALE', this.locales[0].locale);
    //     this.broadcastService.dispatch(
    //       new AppEvent(AppEventType.LOCALES_LOADED_EVENT)
    //     );
    //     this.addTranslation();
    //   }
    //   // else if (localStorage.getItem('LOCALE') != this.locales[0].locale) {
    //   else if (
    //     this.locales.some(
    //       (locale: { locale: string }) =>
    //         locale.locale == localStorage.getItem('LOCALE')
    //     )
    //   ) {
    //     localStorage.setItem('LOCALE', this.locales[0].locale);
    //     this.addTranslation();
    //   }
    // });
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
