import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { AppEventType } from 'src/app/shared/enums/event.enum';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  toggleBtn!: FormGroup;

  @Input('isActive') public isActive!: boolean;
  @Input('meta') public meta!: any;

  ngOnInit() {
    this.toggleBtn = new FormGroup({
      isChecked: new FormControl(this.isActive),
    });
  }

  onChange(event: any) {
    this.isActive = event.target.checked;
    this.broadcastService.broadcast({
      name: AppEventType.TOGGLE_EVENT,
      data: { isActive: this.isActive },
    });
  }
}
