import { Component, Input, OnInit } from '@angular/core';
import { AppEventType } from '../../enums/event.enum';
import { BroadcastService } from '../../services/broadcast.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {}

  @Input('isLocaleListPage') public isLocaleListPage!: boolean;

  ngOnInit(): void {}
}
