import { Component, HostListener, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  defaultIcon: string =
    "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10 2.73438C5.98828 2.73438 2.73438 5.98828 2.73438 10C2.73438 14.0117 5.98828 17.2656 10 17.2656C14.0117 17.2656 17.2656 14.0117 17.2656 10C17.2656 5.98828 14.0117 2.73438 10 2.73438ZM10 15.0781C9.56836 15.0781 9.21875 14.7285 9.21875 14.2969C9.21875 13.8652 9.56836 13.5156 10 13.5156C10.4316 13.5156 10.7812 13.8652 10.7812 14.2969C10.7812 14.7285 10.4316 15.0781 10 15.0781ZM11.2285 10.791C11.0516 10.8593 10.8994 10.9793 10.7918 11.1354C10.6841 11.2915 10.626 11.4764 10.625 11.666V12.1094C10.625 12.1953 10.5547 12.2656 10.4688 12.2656H9.53125C9.44531 12.2656 9.375 12.1953 9.375 12.1094V11.6895C9.375 11.2383 9.50586 10.793 9.76367 10.4219C10.0156 10.0586 10.3672 9.78125 10.7812 9.62305C11.4453 9.36719 11.875 8.81055 11.875 8.20312C11.875 7.3418 11.0332 6.64062 10 6.64062C8.9668 6.64062 8.125 7.3418 8.125 8.20312V8.35156C8.125 8.4375 8.05469 8.50781 7.96875 8.50781H7.03125C6.94531 8.50781 6.875 8.4375 6.875 8.35156V8.20312C6.875 7.43555 7.21094 6.71875 7.82031 6.18555C8.40625 5.67188 9.17969 5.39062 10 5.39062C10.8203 5.39062 11.5938 5.67383 12.1797 6.18555C12.7891 6.71875 13.125 7.43555 13.125 8.20312C13.125 9.33203 12.3809 10.3477 11.2285 10.791Z' fill='#F3FCFE'/><path fill-rule='evenodd' clip-rule='evenodd' d='M1.25 10C1.25 5.16797 5.16797 1.25 10 1.25C14.832 1.25 18.75 5.16797 18.75 10C18.75 14.832 14.832 18.75 10 18.75C5.16797 18.75 1.25 14.832 1.25 10ZM2.73438 10C2.73438 14.0117 5.98828 17.2656 10 17.2656C14.0117 17.2656 17.2656 14.0117 17.2656 10C17.2656 5.98828 14.0117 2.73438 10 2.73438C5.98828 2.73438 2.73438 5.98828 2.73438 10ZM9.44757 14.8493C9.30106 14.7028 9.21875 14.5041 9.21875 14.2969C9.21875 14.0897 9.30106 13.891 9.44757 13.7444C9.59409 13.5979 9.7928 13.5156 10 13.5156C10.2072 13.5156 10.4059 13.5979 10.5524 13.7444C10.6989 13.891 10.7812 14.0897 10.7812 14.2969C10.7812 14.5041 10.6989 14.7028 10.5524 14.8493C10.4059 14.9958 10.2072 15.0781 10 15.0781C9.7928 15.0781 9.59409 14.9958 9.44757 14.8493ZM10 5.39062C10.8203 5.39062 11.5938 5.67383 12.1797 6.18555C12.7891 6.71875 13.125 7.43555 13.125 8.20312C13.125 9.33203 12.3809 10.3477 11.2285 10.791C11.0516 10.8593 10.8994 10.9793 10.7918 11.1354C10.6841 11.2915 10.626 11.4764 10.625 11.666V12.1094C10.625 12.1953 10.5547 12.2656 10.4688 12.2656H9.53125C9.44531 12.2656 9.375 12.1953 9.375 12.1094V11.6895C9.375 11.2383 9.50586 10.793 9.76367 10.4219C10.0156 10.0586 10.3672 9.78125 10.7812 9.62305C11.4453 9.36719 11.875 8.81055 11.875 8.20312C11.875 7.3418 11.0332 6.64062 10 6.64062C8.9668 6.64062 8.125 7.3418 8.125 8.20312V8.35156C8.125 8.4375 8.05469 8.50781 7.96875 8.50781H7.03125C6.94531 8.50781 6.875 8.4375 6.875 8.35156V8.20312C6.875 7.43555 7.21094 6.71875 7.82031 6.18555C8.40625 5.67188 9.17969 5.39062 10 5.39062Z' fill='#087584'></svg>";
  positiveButton: string = 'CMP_OKAY';
  negativeButton: string = 'CMP_CANCEL';
  headerText: string = 'CMP_ARE_YOU_SURE_YOU_WANT_TO_RESET';
  bodyText!: string;
  isDataLoaded: boolean = false;

  @HostListener('window:click', ['$event.target']) onWindowClick(e: any) {
    // if condition to if check if click is happened outside or not
    if (e.id != 'mfe-modal' && this.isDataLoaded) {
      this.closeModal(false);
    }
  }

  constructor(
    private broadcastService: BroadcastService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.addTranslation();
  }

  addTranslation() {
    this.sharedService.getI18nValues().subscribe((i18n: any) => {
      this.positiveButton = i18n[this.positiveButton]
        ? i18n[this.positiveButton]
        : this.positiveButton;
      this.negativeButton = i18n[this.negativeButton]
        ? i18n[this.negativeButton]
        : this.negativeButton;
      this.headerText = i18n[this.headerText]
        ? i18n[this.headerText]
        : this.headerText;
      this.bodyText = i18n[this.bodyText] ? i18n[this.bodyText] : this.bodyText;
      this.isDataLoaded = true;
    });
  }

  closeModal(reset: boolean) {
    this.broadcastService.dispatch(
      new AppEvent(AppEventType.CLOSE_MODAL_EVENT, {
        close: reset,
      })
    );
  }
}
