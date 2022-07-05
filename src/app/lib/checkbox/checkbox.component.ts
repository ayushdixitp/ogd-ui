import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppEventType } from '../../shared/enums/event.enum';
import { BroadcastService } from '../../shared/services/broadcast.service';

@Component({
  selector: 'phenom-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, AfterViewInit {
  @ViewChild('svg') svg: ElementRef | undefined;

  constructor(private broadcastService: BroadcastService) {}

  checkbox!: FormGroup;

  @Input('isActive') public isActive!: boolean;
  @Input('isDisabled') public isDisabled!: boolean;

  // @Output('checkboxState') checkBoxState = new EventEmitter();

  ngOnInit(): void {
    console.log(this.isActive);
    console.log(this.svg);
    this.checkbox = new FormGroup({
      control: new FormControl(this.isActive),
    });
  }

  ngAfterViewInit(): void {
    if (this.isDisabled) {
      //  let ele = document.getElementById("fil-this");
      //  ele?.setAttribute("fill","#8D949A");
      //  ele?.setAttribute("stroke","#8D949A");

      // console.log(this.svg)
      this.svg?.nativeElement.setAttribute('fill', '#8D949A');
      this.svg?.nativeElement.setAttribute('stroke', '#8D949A');
    }
  }

  onChange(event: any) {
    this.isActive = event.target.checked;
    // this.checkBoxState.emit({state: this.isActive});
    this.broadcastService.broadcast({
      name: AppEventType.CHECKBOX_EVENT,
      data: { isActive: this.isActive },
    });
  }
}
