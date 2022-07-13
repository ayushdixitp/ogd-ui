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
  @Input('time') public time!: string;
  @Input('isConfigured') public isConfigured!: boolean;

  ngOnInit(): void {
    // this.botType = "SMS Bot"
    // this.experienceType = "Candidate Experience"
    // this.phnNumber = "+9876543210"
    // this.time = "2 days ago"
    // this.isConfigured = true
  }
}
