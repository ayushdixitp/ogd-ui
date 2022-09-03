import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'chatbot-management-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  constructor(private sharedService: SharedService) {}
  @Input() refNum!: string;
  title = 'chatbot-management-app';

  ngOnInit() {
    if (this.refNum) this.setRefNum(this.refNum);
  }
  setRefNum(refNum: string) {
    localStorage.setItem('refNum', refNum);
  }

  ngOnDestroy(): void {
    localStorage.setItem('mfe-state', location.pathname);
  }
}
