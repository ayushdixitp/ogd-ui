import { Component, OnInit } from '@angular/core';
import { CommonConstant } from 'src/app/shared/constants/common-constants';
import { DropdownItem } from 'src/app/shared/interfaces/dropdown.interface';

@Component({
  selector: 'environment-ogd',
  templateUrl: './environment-ogd.component.html',
  styleUrls: ['./environment-ogd.component.scss'],
})
export class EnvironmentOgdComponent implements OnInit {
  CommonConstant = CommonConstant;

  listOfEnvironments: Array<DropdownItem> = [
    {
      item: 'dev',
      displayText: 'dev',
    },
    {
      item: 'qa',
      displayText: 'qa',
    },
    {
      item: 'stg',
      displayText: 'stg',
    },
    {
      item: 'prod',
      displayText: 'prod',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
