import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
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
export class CheckboxComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('svg') svg: ElementRef | undefined;
  @Input('isActive') public isActive!: string;
  @Input('isDisabled') public isDisabled!: boolean;
  @Input('id') public id!: string;
  @Input('attributeConfigurationKey') public attributeConfigurationKey!: string;

  constructor(private broadcastService: BroadcastService) {}

  checkbox!: FormGroup;

  ngOnInit(): void {
    this.checkbox = new FormGroup({
      control: new FormControl(this.isActive),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isDisabled && this.isActive) {
      this.svg?.nativeElement.setAttribute('fill', '#8D949A');
      this.svg?.nativeElement.setAttribute('stroke', '#8D949A');
    } else {
      this.svg?.nativeElement.setAttribute('fill', '#FFFFFF');
      this.svg?.nativeElement.setAttribute('stroke', '#FFFFFF');
    }
  }

  ngAfterViewInit(): void {
    if (this.isDisabled && this.isActive) {
      this.svg?.nativeElement.setAttribute('fill', '#8D949A');
      this.svg?.nativeElement.setAttribute('stroke', '#8D949A');
    }
  }

  onChange(event: any) {
    this.isActive = event.target.checked;
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.CHECKBOX_EVENT, {
        id: this.id,
        data: {
          type: 'checkbox',
          configurationKey: this.id,
          isActive: this.isActive,
          attributeConfigurationKey: this.attributeConfigurationKey,
        },
      })
    );
  }
}
