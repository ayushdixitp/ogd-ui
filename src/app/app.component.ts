import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'chatbot-management-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private sharedService: SharedService) {}
  @Input() refNum!: string;
  title = 'chatbot-management-app';

  ngOnInit() {
    if (this.refNum) this.setRefNum(this.refNum);
  }
  setRefNum(refNum: string) {
    localStorage.setItem('refNum', refNum);
  }
}
