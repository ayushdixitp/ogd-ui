import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionControlService } from 'src/app/shared/services/question-control.service';
import { QuestionBase } from './provisioning.question-base';

@Component({
  selector: 'provisioning.component',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.scss'],
})
export class Provisioning implements OnInit {
  controlList!: string[];
  isDataLoaded: boolean = false;
  formControlList: FormControl[] = [];

  constructor(private questionControlService: QuestionControlService) {}
  skeleton: any = {
    pageId: 'configure-candidate-facebook-bot',
    heading: 'Facebook Bot',
    experience: 'Candidate Experience',
    setupGuideUrl: 'some_doc_url',
    facebookConfigurations: {
      heading: 'CMP_CONFIGURATION',
      icon: '',
      inputs: [
        {
          required: true,
          label: 'CMP_CALL_BACK_URL',
          key: 'CMP_CALL_BACK_URL',
          placeholder: 'CMP_ADD_CALL_BACK_URL',
          actions: {
            type: 'input-field',
          },
          configurationKey: 'call_back_url',
          isCopyEnabled: true,
        },
        {
          required: true,
          label: 'CMP_VERIFY_TOKEN',
          key: 'CMP_VERIFY_TOKEN',
          placeholder: 'CMP_ADD_TOKEN_HERE',
          actions: {
            type: 'input-field',
          },
          configurationKey: 'verify_token',
        },
        {
          required: true,
          label: 'CMP_PAGE_ACCESS_TOKEN',
          key: 'CMP_PAGE_ACCESS_TOKEN',
          placeholder: 'CMP_PASTE_TOKEN_GENERATED_HERE',
          actions: {
            type: 'input-field',
          },
          configurationKey: 'verify_token',
        },
        {
          required: true,
          label: 'CMP_APP_SECRET',
          key: 'CMP_APP_SECRET',
          placeholder: 'CMP_PASTE_APP_SECRET_HERE',
          actions: {
            type: 'input-field',
          },
          configurationKey: 'verify_token',
        },
      ],
      submitButton: {
        label: 'CMP_CONFIGURE',
      },
    },
  };

  provisioningForm!: FormGroup;

  ngOnInit(): void {
    this.provisioningForm = this.questionControlService.toFormGroup(
      this.skeleton?.facebookConfigurations?.inputs as QuestionBase<string>[]
    );
    this.controlList = Object.keys(this.provisioningForm.controls);
    this.controlList.forEach((control, index) => {
      this.formControlList[index] = this.provisioningForm.get(
        control
      ) as FormControl;
    });
    this.isDataLoaded = true;
  }

  // here we will be caliing api
  submitForm() {
    console.log(this.provisioningForm?.status);
  }
}
