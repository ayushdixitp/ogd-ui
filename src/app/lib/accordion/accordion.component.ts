import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AccordionItem } from 'src/app/shared/interfaces/accordion.interface';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  @Input() pages: Array<AccordionItem> = [
    { pageId: 'career-site-bot', heading: 'Career Site Bot' },
    { pageId: 'sms-bot', heading: 'SMS Bot' },
    { pageId: 'facebook-bot', heading: 'Facebook Bot' },
    { pageId: 'whatsapp-bot', heading: 'Whatsapp Bot' },
  ];
  @Input() experienceType!: string;
  @Input() defaultPageId!: string;
  @Input() iconSrc!: string;

  isShowPages: boolean = false;
  selectedPageId: string = '';

  ngOnInit(): void {
    this.selectedPageId = this.pages.some(
      page => page.pageId === this.defaultPageId
    )
      ? this.defaultPageId
      : this.pages[0].pageId;
  }

  onClick() {
    this.isShowPages = !this.isShowPages;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.SELECTED_PAGE, {
        name: AppEventType.SELECTED_PAGE,
        data: { selectedPageId: this.selectedPageId },
      })
    );
  }

  onBotCardClick(event: any) {
    this.selectedPageId = event.target.id;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.SELECTED_PAGE, {
        name: AppEventType.SELECTED_PAGE,
        data: { selectedPageId: this.selectedPageId },
      })
    );
  }
}
