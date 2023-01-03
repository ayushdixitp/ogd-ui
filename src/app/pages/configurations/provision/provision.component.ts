import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Provision } from 'src/app/shared/interfaces/web-chatbot.interface';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'provision',
  templateUrl: './provision.component.html',
  styleUrls: ['./provision.component.scss'],
})
export class ProvisionComponent implements OnInit {
  @Input() skeleton!: Provision;
  @Output() provisioned = new EventEmitter();
  pageId!: string;
  experienceType!: string;
  botType!: string;
  isDataLoaded!: boolean;

  constructor(
    private httpService: HttpService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.addTransalations();
  }

  provisionChannel() {
    let reqObj = {
      refNum: localStorage.getItem('refNum'),
      locale: localStorage.getItem('LOCALE'),
      experienceType: localStorage.getItem('experienceType'),
      channel: localStorage.getItem('channel'),
      customerName: localStorage.getItem('customerName'),
    };

    this.httpService
      .httpPost('v2/provision', 'chatbot_configurations_api', reqObj)
      .subscribe({
        next: (data: any) => {
          if (data.statusCode == 404) {
            this.provisioned.emit({
              isProvisioned: false,
            });
          } else {
            this.provisioned.emit({
              isProvisioned: true,
            });
          }
        },
        error: () => {
          this.provisioned.emit({
            isProvisioned: false,
          });
        },
      });
  }

  addTransalations() {
    this.isDataLoaded = false;
    if (this.skeleton) {
      this.sharedService.getI18nValues().subscribe((i18n: any) => {
        this.skeleton.heading = i18n[this.skeleton.heading]
          ? i18n[this.skeleton.heading]
          : this.skeleton.heading;
        this.skeleton.buttonText = i18n[this.skeleton.buttonText]
          ? i18n[this.skeleton.buttonText]
          : this.skeleton.buttonText;
        this.skeleton.infoText = i18n[this.skeleton.infoText]
          ? i18n[this.skeleton.infoText]
          : this.skeleton.infoText;
        this.skeleton.subHeading = i18n[this.skeleton.subHeading]
          ? i18n[this.skeleton.subHeading]
          : this.skeleton.subHeading;
        this.isDataLoaded = true;
      });
    }
  }
}
