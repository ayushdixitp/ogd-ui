import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AccordionItem } from 'src/app/shared/interfaces/accordion.interface';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit, OnChanges {
  @Input() pages: Array<AccordionItem> = [
    { pageId: 'career-site-bot', heading: 'Career Site Bot' },
    { pageId: 'sms-bot', heading: 'SMS Bot' },
    { pageId: 'facebook-bot', heading: 'Facebook Bot' },
    { pageId: 'whatsapp-bot', heading: 'Whatsapp Bot' },
  ];

  @Input() experienceType!: string;
  @Input() defaultPageId!: string | undefined;
  @Input() iconSrc!: string;
  @Input('isShowPages') public isShowPages: boolean = false;
  @Input('id') public id: string = '';

  selectedPageId: string | undefined = '';
  accordionData: any;
  currentOpenAccordion!: string | null;

  constructor(
    private broadcastService: BroadcastService,
    router: Router,
    route: ActivatedRoute
  ) {
    console.log('accordion comp loaded');
    console.log(this.defaultPageId);
    this.currentOpenAccordion = router?.url?.split('/')[1];
  }

  ngOnChanges() {
    this.isShowPages = this.isShowPages;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.ACCORDION_EVENT_INIT, {
        accordionId: this.id,
        isAccordionOpen: this.isShowPages,
        experienceType: this.experienceType,
        page: this.defaultPageId,
        heading: this.pages.filter(page => page.pageId == this.defaultPageId)[0]
          ?.heading,
        channel: this.defaultPageId,
      })
    );
  }

  ngOnInit(): void {
    this.currentOpenAccordion = localStorage.getItem('experienceType');
    this.selectedPageId = this.pages.some(
      page => page.pageId === this.defaultPageId
    )
      ? this.defaultPageId
      : '';
    if (
      this.id === this.currentOpenAccordion &&
      this.defaultPageId === this.selectedPageId
    ) {
      this.isShowPages = true;
      if (this.isShowPages) {
        this.broadcastService.dispatch(
          new AppEvent(AppEventType.ACCORDION_EVENT_INIT, {
            accordionId: this.id,
            isAccordionOpen: this.isShowPages,
            experienceType: this.experienceType,
            page: this.defaultPageId,
            heading: this.pages.filter(
              page => page.pageId == this.defaultPageId
            )[0]?.heading,
            channel: this.defaultPageId,
          })
        );
      }
    }
    // if (
    //   this.id === this.currentOpenAccordion &&
    //   this.defaultPageId === this.selectedPageId
    // ){
    //   this.isShowPages = true;
    // }

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
    this.currentOpenAccordion = this.id;
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
