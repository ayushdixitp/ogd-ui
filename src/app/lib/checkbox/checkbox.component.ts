import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { AppEventType } from '../../shared/enums/event.enum';
import { BroadcastService } from '../../shared/services/broadcast.service';

@Component({
  selector: 'phenom-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @ViewChild('svg') svg: ElementRef | undefined;

  @Input('isActive') public isActive!: string;
  @Input('isDisabled') public isDisabled!: boolean;
  @Input('id') public id!: string;

  constructor(private broadcastService: BroadcastService) {}

  checkbox!: FormGroup;

  ngOnInit(): void {
    this.checkbox = new FormGroup({
      control: new FormControl(this.isActive),
    });
  }

  ngAfterViewInit(): void {
    if (this.isDisabled) {
      this.svg?.nativeElement.setAttribute('fill', '#8D949A');
      this.svg?.nativeElement.setAttribute('stroke', '#8D949A');
    }
  }

  onChange(event: any) {
    this.isActive = event.target.checked;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.CHECKBOX_EVENT, {
        id: this.id,
        isActive: this.isActive,
      })
    );
  }
}
