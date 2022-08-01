import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent implements OnInit {
  @Input('name') public name!: string;
  @Input('placeholder') public placeholder!: string;
  @Input('value') public value!: string;
  @Input('formControlName') public formControlName!: FormControlName;
  @Input('className') public className!: string;
  @Input('state') public state!: string;
  @Input('id') public id!: string;

  @Output('currentValue') public currentValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitCurrentValue() {
    this.currentValue.emit({
      id: this.id,
      value: this.value,
    });
  }
}
