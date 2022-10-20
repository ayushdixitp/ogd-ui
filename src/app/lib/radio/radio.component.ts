import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input('data') data: any;
  @Input('isDisabled') isDisabled!: boolean;
  @Output('change') change = new EventEmitter();
  isActive: any;

  constructor(private broadcastService: BroadcastService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.isActive = event.target.checked;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.RADIO_EMITTER, {
        id: this.data.id,
        data: {
          type: 'radio',
          isActive: this.data.version,
          configurationKey: this.data.configurationKey,
        },
      })
    );
  }
}
