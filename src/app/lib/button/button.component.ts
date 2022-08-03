// how to use it
//  <app-button [label]="'Click Me!'" [icon]="'https://d7pkvxpsevxsc.cloudfront.net/bot-icons/icon_2.svg'" [buttonClass]="'btn-medium'"></app-button>

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('label') public label!: string;
  @Input('icon') public icon!: string;
  @Input('iconPosotion') public iconPosition!: string;
  @Input('buttonClass') public buttonClass!: string;
  @Input('isDisabled') public isDisabled!: boolean;

  @Output('onClick') onClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.onClick.emit({
      data: {
        label: this.label,
      },
    });
  }
}
