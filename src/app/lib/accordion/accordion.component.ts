import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AccordionItem } from 'src/app/shared/interfaces/accordion.interface';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  showbots: boolean = false;
  isClicked: boolean = false;
  selectedPageId: string = '';

  @Input() list: Array<AccordionItem> = [
    { pageId: 'career-site-bot', heading: 'Career Site Bot' },
    { pageId: 'sms-bot', heading: 'SMS Bot' },
    { pageId: 'facebook-bot', heading: 'Facebook Bot' },
    { pageId: 'whatsapp-bot', heading: 'Whatsapp Bot' },
  ];

  ngOnInit(): void {
    this.broadcastService.broadcast({
      name: AppEventType.SELECTED_PAGE,
      data: { selectedPageId: this.selectedPageId },
    });
  }

  onClick() {
    this.showbots = !this.showbots;
  }

  onBotCardClick(event: any) {
    this.isClicked = true;
    this.selectedPageId = event.target.id;
  }
}
