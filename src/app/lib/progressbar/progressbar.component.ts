import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  constructor() {}
  @Input('value') public value: number = 1;
  ngOnInit(): void {}
}
