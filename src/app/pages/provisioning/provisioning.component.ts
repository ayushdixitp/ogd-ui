import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { QuestionControlService } from 'src/app/shared/services/question-control.service';
import { SharedService } from 'src/app/shared/shared.service';
import { QuestionBase } from './provisioning.question-base';

@Component({
  selector: 'provisioning.component',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.scss'],
})
export class Provisioning implements OnInit, OnDestroy {
  controlList!: string[];
  isDataLoaded: boolean = false;
  formControlList: FormControl[] = [];
  page: string | undefined;
  routeSubscription: Subscription;

  constructor(
    private questionControlService: QuestionControlService,
    private sharedService: SharedService,
    private broadcastService: BroadcastService,
    private router: Router
  ) {
    this.routeSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.page = event.url;
      }
    });
  }
  skeleton!: any;

  provisioningForm!: FormGroup;

  ngOnInit(): void {
    this.getDashboardSchema();
  }

  getDashboardSchema() {
    this.sharedService.getDashboardSchema(this.page).subscribe((data: any) => {
      this.skeleton = data;
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
    });
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
  submitForm() {}

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
