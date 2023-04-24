import {
  Component,
  OnDestroy,
  OnInit,
  NgModule,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  Input,
} from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { Channels } from 'src/app/shared/enums/channels.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AppEvent } from 'src/app/shared/services/broadcast.event.class';
import { NotificationCardComponent } from 'src/app/lib/notification-card/notification-card.component';
import { CommonConstant } from 'src/app/shared/constants/common-constants';
import { ModalComponent } from 'src/app/lib/modal/modal.component';
import { Configurations } from './configurations';

@Component({
  selector: 'configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent implements OnInit, OnDestroy {
  @Input() roleAccess!: string | null;

  currentRoute: string | undefined;
  channel!: string | null;
  finalstructure: any = {};
  skeleton!: any;
  configurations: any;
  isDataLoaded: boolean = false;
  disableAllChannels: boolean = false;
  routeSubscription!: Subscription;
  localesLoadedSubscription!: Subscription;
  i18n: any;

  pageId!: string | null;
  refNum!: string | null;
  locale!: string | null;
  experienceType!: string | null;
  isCustomerIsProvisioned!: boolean;
  configurationPageId!: string | undefined;
  listOfCOnfigurations: string[] = [];
  timer: any;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  vcr!: ViewContainerRef;
  ref!: ComponentRef<NotificationCardComponent>;
  modalRef!: ComponentRef<ModalComponent>;

  constructor(
    private broadcastService: BroadcastService,
    private sharedService: SharedService,
    private httpService: HttpService,
    private utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routeSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const len = event.url.split('?')[0].split('/').length;
        const paramsList = event.url.split('?')[0].split('/');
        this.pageId = `/${paramsList[len - 1]}`;
      }
    });
  }

  ngOnInit(): void {
    this.roleAccess = localStorage.getItem('roleAccess');
    this.isDataLoaded = false;
    this.refreshLocalStorageValue();
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  isNotificationVisible: boolean = false;

  refreshLocalStorageValue() {
    this.refNum = localStorage.getItem('refNum');
    this.locale = localStorage.getItem('LOCALE');
    this.channel = localStorage.getItem('channel');
    this.experienceType = localStorage.getItem('experienceType');
    // this.pageId = `/${localStorage.getItem('channel')}`;
  }

  checkIfCustomerisProvisioned() {
    this.refreshLocalStorageValue();
    const url = this.utilsService.getChatbotConfigurationsPath();
    this.utilsService
      .checkIfCustomerIsProvisioned(url, this.pageId)
      .then((data) => {
        if (data.status == 200) {
          this.isCustomerIsProvisioned = true;
        } else {
          this.sharedService
            .getDashboardSchema(this.pageId)
            .subscribe((data) => {
              this.configurationPageId = data?.configurationPageId;
            });
          this.isCustomerIsProvisioned = false;
        }
      });
  }

  // this function will be responsible for rending blocks based on internal or external role
  checkRoleAccess(isInternal: boolean | undefined | null): boolean {
    if (isInternal) {
      return this.roleAccess == CommonConstant.INTERNAL;
    } else {
      return true;
    }
  }

  isInternal() {
    return this.roleAccess == CommonConstant.INTERNAL;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.localesLoadedSubscription.unsubscribe();
  }
}
