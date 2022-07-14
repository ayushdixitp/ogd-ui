import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input('experienceType') public experienceType!: string;
  @Input('botType') public botType!: string;
  @Input('phnNumber') public phnNumber!: string;
  @Input('isLocaleListPage') public isLocaleListPage!: boolean;
  @Input('meta') public meta: any ={};

  ngOnInit(): void {

  }
}
