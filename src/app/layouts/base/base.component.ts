import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit, OnChanges {
  isLocaleListPage!: boolean;
  currentUrl!: string;

  constructor(
    private router: Router,
    private broadcastService: BroadcastService
  ) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit(): void {
    if (this.currentUrl == '/' || this.currentUrl == '/locales') {
      this.isLocaleListPage = true;
    } else {
      this.isLocaleListPage = false;
    }
    this.broadcastService
      .on(AppEventType.SELECTED_LOCALE_EVENT)
      .subscribe(() => (this.isLocaleListPage = false));
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (this.currentUrl == '/' || this.currentUrl == '/locales') {
      this.isLocaleListPage = true;
    } else {
      this.isLocaleListPage = false;
    }
    this.broadcastService
      .on(AppEventType.SELECTED_LOCALE_EVENT)
      .subscribe(() => (this.isLocaleListPage = false));
  }
}
