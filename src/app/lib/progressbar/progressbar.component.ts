import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
} from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  isActive!: string;
  constructor(private broadcastService: BroadcastService) {}
  @Input('value') public value: number = 1;
  @Input('isDisabled') public isDisabled: boolean = false;
  @Input('id') public id!: string;
  @Input('configurationKey') public configurationKey!: string;
  @Output('changedValue') changedValue = new EventEmitter();

  ngOnInit(): void {}

  changeValue(data: any) {
    this.isActive = data.target.checked;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.RANGE_EMITTER, {
        id: this.id,
        data: {
          type: 'range',
          isActive: data.target.value,
          configurationKey: this.configurationKey,
        },
      })
    );
    this.changedValue.emit({});
  }

  ngAfterViewInit() {
    let progressValue: HTMLElement | null | any = document.getElementById(
      `progress-value-${this.id}`
    );
    progressValue.innerHTML = this.value;
    let progress = this.value * 100;
    progressValue.style.left = Math.floor(progress) - 4 + '%';
  }

  progress(data: any) {
    let progressValue: HTMLElement | null | any = document.getElementById(
      `progress-value-${this.id}`
    );
    if (progressValue) {
      progressValue.style.display = 'flex';
      progressValue.innerHTML = data.target.value;
      let progress = parseFloat(data.target.value) * 100;
      progressValue.style.left = Math.floor(progress) - 4 + '%';
    }
  }
}
