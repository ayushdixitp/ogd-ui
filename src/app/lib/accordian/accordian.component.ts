import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  showbots: boolean = false;
  isClicked: boolean = false;
  selectedId: string = '';

  @Input() list: Array<any> = [
    { pageId: 'career-site-bot', title: 'Career Site Bot' },
    { pageId: 'sms-bot', title: 'SMS Bot' },
    { pageId: 'facebook-bot', title: 'Facebook Bot' },
    { pageId: 'whatsapp-bot', title: 'WhatsApp Bot' },
  ];

  ngOnInit(): void {
    this.broadcastService.broadcast({
      name: AppEventType.SELECTED_PAGE,
      data: { selectedId: this.selectedId },
    });
  }

  onClick() {
    this.showbots = !this.showbots;
    console.log(this.showbots);
  }

  onBotCardClick(event: any) {
    this.isClicked = true;
    this.selectedId = event.target.id;
  }
}
