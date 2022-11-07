import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Provision } from 'src/app/shared/interfaces/web-chatbot.interface';

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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  provisionChannel() {
    let reqObj = {
      refNum: localStorage.getItem('refNum'),
      locale: localStorage.getItem('locale'),
      experienceType: localStorage.getItem('experienceType'),
      channel: localStorage.getItem('channel'),
      customerName: localStorage.getItem('customerName'),
    };
    console.log(reqObj);
    this.httpService
      .httpPost('v1/customers/provision', 'chatbot_configurations_api', reqObj)
      .subscribe((data: any) => {
        this.provisioned.emit({
          isProvisioned: true,
        });
      });
  }
}
