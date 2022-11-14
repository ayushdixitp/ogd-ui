import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppEventType } from '../../enums/event.enum';
import { AppEvent } from '../../services/broadcast.event.class';
import { BroadcastService } from '../../services/broadcast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  @Input('experienceType') public experienceType!: string;
  @Input('botType') public botType!: string;
  @Input('phnNumber') public phnNumber!: string;
  @Input('isLocaleListPage') public isLocaleListPage!: boolean;
  @Input('meta') public meta: any = {};

  pageId!: string;

  ngOnInit(): void {
    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT_INIT)
      .subscribe((event: any) => {
        this.pageId = event.payload.page;
        if (event.payload.experienceType && event.payload.heading) {
          this.experienceType = event.payload.experienceType;
          this.botType = event.payload.heading;
        }
      });
  }

  resetToDefault() {
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.RESET_TO_DEFAULT_CONFIGURATIONS)
    );
  }
}
