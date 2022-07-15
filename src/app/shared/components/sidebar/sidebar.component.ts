import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  @Input('isLocaleListPage') public isLocaleListPage!: boolean;

  ngOnInit(): void {}

  onAccordionClick(event: any) {
    console.log(event.target);
  }
}
