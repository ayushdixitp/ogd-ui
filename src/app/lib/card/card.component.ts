import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'phenom-simple-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() text!: string;
  @Output() onClickEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    this.onClickEvent.emit(event);
  }
}
