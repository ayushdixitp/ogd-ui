import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  toggleBtn!: FormGroup;

  @Input('isActive') public isActive!: string;
  @Input('meta') public meta!: any;
  @Input('id') public id!: string;
  @Input('isDisabled') public isDisabled!: boolean;

  ngOnInit() {}

  onChange(event: any) {
    this.isActive = event.target.checked;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.TOGGLE_EVENT, {
        data: {
          configurationKey: this.id,
          type: 'toggle',
          isActive: this.isActive,
        },
        id: this.id,
      })
    );
  }
}
