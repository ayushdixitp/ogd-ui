import { Component, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { NotificationType } from 'src/app/shared/enums/notificationType.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {
  notificationText: string = 'Default Notification Text';
  notificationType!: string;
  eNotificationType = NotificationType;

  constructor(private broadcastService: BroadcastService) {}

  ngOnInit(): void {
    this.broadcastService
      .on(AppEventType.SHOW_NOTIFICATION_EVENT)
      .subscribe((event: any) => {
        let data = event.payload;
        this.notificationText = data.msg;
        this.notificationType = data.type;
      });
  }
}
