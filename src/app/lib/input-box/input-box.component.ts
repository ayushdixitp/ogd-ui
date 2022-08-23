import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormControlName,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBoxComponent),
      multi: true,
    },
  ],
})
export class InputBoxComponent implements OnInit {
  @Input('name') public name!: string;
  @Input('placeholder') public placeholder!: string;
  @Input('value') public value!: string;
  @Input('formControlName') public formControlName!: FormControlName;
  @Input('className') public className!: string;
  @Input('state') public state!: string;
  @Input('id') public id!: any;
  @Input('isCopyEnabled') public isCopyEnabled: boolean = false;

  // testing
  @Input() control!: FormControl;

  @Output('currentValue') public currentValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitCurrentValue() {
    this.currentValue.emit({
      id: this.id,
      value: this.control.value,
    });
  }
}
