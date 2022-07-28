import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'chatbot-management-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(
    private sharedService: SharedService,
    private localStorageService: LocalStorageService
  ) {}
  @Input() refNum!: string;
  title = 'chatbot-management-app';

  ngOnInit() {
    if (this.refNum) this.setRefNum(this.refNum);
  }
  setRefNum(refNum: string) {
    this.localStorageService.setLocalStorageItem('refNum', refNum);
  }
}
