import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from 'src/app/pages/provisioning/provisioning.question-base';

@Injectable({
  providedIn: 'root',
})
export class QuestionControlService {
  constructor() {}
  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};
    questions.forEach(question => {
      console.log(question.required);
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
