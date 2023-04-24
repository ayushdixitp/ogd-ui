import { Component, OnInit } from '@angular/core';
import { CommonConstant } from 'src/app/shared/constants/common-constants';

@Component({
  selector: 'ogd',
  templateUrl: './ogd.component.html',
  styleUrls: ['./ogd.component.scss'],
})
export class OgdComponent implements OnInit {
  CommonConstant = CommonConstant;
  activeTab: string = 'environment';

  constructor() {}

  ngOnInit(): void {}

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
