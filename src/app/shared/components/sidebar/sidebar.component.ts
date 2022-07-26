import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private broadcastService: BroadcastService,
    private router: Router
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
    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT)
      .subscribe((event: any) => {
        if (event?.payload?.selectedPageId) {
          console.log(event.payload);
          this.router.navigate([event?.payload?.selectedPageId]);
        }
      });
  }
}
