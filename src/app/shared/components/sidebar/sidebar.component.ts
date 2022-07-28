import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  refNum!: string;
  locales: any;
  isDataLoaded: boolean = false;

  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  @Input('isLocaleListPage') public isLocaleListPage!: boolean;

  accord1 = [
    { pageId: 'career-site-bot', heading: 'Career Site Bot' },
    { pageId: 'sms-bot', heading: 'SMS Bot' },
    { pageId: 'facebook-bot', heading: 'Facebook Bot' },
    { pageId: 'whatsapp-bot', heading: 'Whatsapp Bot' },
  ];

  accord2 = [
    { pageId: 'employee-site-bot', heading: 'Employee Site Bot' },
    { pageId: 'sms-bot', heading: 'SMS Bot' },
    { pageId: 'facebook-bot', heading: 'Facebook Bot' },
    { pageId: 'whatsapp-bot', heading: 'Whatsapp Bot' },
  ];

  ngOnInit(): void {
    this.refNum = 'PHENA0059';
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
}
