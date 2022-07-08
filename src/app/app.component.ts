import { Component } from '@angular/core';
import { AppEventType } from './shared/enums/event.enum';
import { BroadcastService } from './shared/services/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private broadcastService: BroadcastService) {}
  title = 'chatbot-management-app';

  ngOnInit() {
    this.broadcastService.subscribe(
      AppEventType.CHECKBOX_EVENT,
      (data: any) => {
        console.log(data);
      }
    );
  }
}
