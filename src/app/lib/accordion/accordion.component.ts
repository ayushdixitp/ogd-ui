import { Component, OnInit, Input } from '@angular/core';
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
  @Input('isShowPages') public isShowPages: boolean = false;
  @Input('id') public id: string = '';

  selectedPageId: string = '';
  accordionData: any;

  ngOnInit(): void {
    this.selectedPageId = this.pages.some(
      page => page.pageId === this.defaultPageId
    )
      ? this.defaultPageId
      : '';

    if (this.defaultPageId === this.selectedPageId) {
      this.isShowPages = true;
      this.broadcastService.dispatch(
        new AppEvent(AppEventType.ACCORDION_EVENT, {
          accordionId: this.id,
          isAccordionOpen: this.isShowPages,
          experienceType: this.experienceType,
          page: this.defaultPageId,
          heading: this.pages.filter(
            page => page.pageId == this.defaultPageId
          )[0].heading,
        })
      );
    }

    this.broadcastService.on(AppEventType.ACCORDION_EVENT).subscribe(data => {
      this.accordionData = data.payload;
      if (this.accordionData.accordionId === this.id) {
        this.isShowPages = !this.isShowPages;
      } else {
        this.isShowPages = false;
        this.selectedPageId = '';
      }
    });
  }

  onClick() {
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.ACCORDION_EVENT, {
        accordionId: this.id,
        isAccordionOpen: this.isShowPages,
      })
    );
  }

  onBotCardClick(event: any) {
    this.isShowPages = !this.isShowPages;
    this.selectedPageId = event.pageId;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.ACCORDION_EVENT, {
        selectedPageId: this.selectedPageId,
        accordionId: this.id,
        isAccordionOpen: this.isShowPages,
        experienceType: this.experienceType,
        heading: event.heading,
        channel: event.channel,
        page: this.defaultPageId,
      })
    );
  }
}
