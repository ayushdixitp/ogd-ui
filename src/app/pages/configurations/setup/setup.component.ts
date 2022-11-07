import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { QuestionControlService } from 'src/app/shared/services/question-control.service';
import { SharedService } from 'src/app/shared/shared.service';
import { QuestionBase } from './setup.question-base';
import { Setup } from 'src/app/shared/interfaces/web-chatbot.interface';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  @Input('pageId') public pageId!: string | undefined;

  controlList!: string[];
  isDataLoaded: boolean = false;
  formControlList: FormControl[] = [];
  page: string | undefined;

  constructor(
    private questionControlService: QuestionControlService,
    private sharedService: SharedService
  ) {}
  @Input() skeleton!: any;

  provisioningForm!: FormGroup;

  ngOnInit(): void {
    this.getDashboardSchema(this.pageId);
  }

  getDashboardSchema(pageId: string | undefined) {
    // this.sharedService
    //   .getDashboardSchema(`/${pageId}`)
    //   .subscribe((data: any) => {
    // this.skeleton = data;
    this.addTranslation();
    this.provisioningForm = this.questionControlService.toFormGroup(
      this.skeleton?.configurations?.inputs as QuestionBase<string>[]
    );
    this.controlList = Object.keys(this.provisioningForm.controls);
    this.controlList.forEach((control, index) => {
      this.formControlList[index] = this.provisioningForm.get(
        control
      ) as FormControl;
    });
    // });
  }

  addTranslation() {
    this.sharedService
      .getI18nValues()
      .pipe(map((data: any) => data))
      .subscribe((i18n: any) => {
        this.skeleton.heading = i18n[this.skeleton.heading];
        this.skeleton.configurations.submitButton.label = i18n[
          this.skeleton.configurations.submitButton.label
        ]
          ? i18n[this.skeleton.configurations.submitButton.label]
          : this.skeleton.configurations.submitButton.label;
        this.skeleton.configurations.heading = i18n[
          this.skeleton.configurations.heading
        ]
          ? i18n[this.skeleton.configurations.heading]
          : this.skeleton.configurations.heading;
        this.skeleton.configurations.inputs =
          this.skeleton.configurations.inputs.map((input: any) => {
            this.isDataLoaded = true;
            input.label = i18n[input.label] ? i18n[input.label] : input.label;
            input.placeholder = i18n[input.placeholder]
              ? i18n[input.placeholder]
              : input.placeholder;
            return input;
          });
      });
  }

  // here we will be caliing api
  submitForm() {
    console.log(this.provisioningForm.value);
    console.log(this.provisioningForm?.status);
  }
}
