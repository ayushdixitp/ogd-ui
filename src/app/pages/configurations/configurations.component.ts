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

@Component({
  selector: 'configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent implements OnInit {
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

  pageId!: string | null;
  refNum!: string | null;
  locale!: string | null;
  experienceType!: string | null;
  isCustomerIsProvisioned!: boolean;
  configurationPageId!: string | undefined;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  vcr!: ViewContainerRef;
  ref!: ComponentRef<NotificationCardComponent>;

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
    this.setupAllEventListener();
    this.isDataLoaded = false;
    this.refreshLocalStorageValue();
    // if (this.experienceType && this.locale && this.refNum && this.channel && (this.pageId as string)?.length > 1)
    //   this.getChatbotConfigurations();
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  setupAllEventListener() {
    this.localesLoadedSubscription = this.broadcastService
      .on(AppEventType.LOCALES_LOADED_EVENT)
      .subscribe(() => {
        this.isDataLoaded = false;
        this.getChatbotConfigurations();
      });

    this.broadcastService
      .on(AppEventType.SELECTED_LOCALE_EVENT)
      .pipe(
        map(res => {
          let data = res.payload;
          return data;
        })
      )
      .subscribe(({ locale }) => {
        this.locale = locale;
      });
    this.broadcastService
      .on(AppEventType.CHECKBOX_EVENT)
      .subscribe((event: any) => {
        this.updateSkeleton(event?.payload);
        this.updateChatbotConfigurations(event?.payload?.data);
      });

    this.broadcastService
      .on(AppEventType.TOGGLE_EVENT)
      .subscribe((event: any) => {
        this.updateSkeleton(event?.payload);
        this.updateChatbotConfigurations(event?.payload?.data);
      });

    this.broadcastService
      .on(AppEventType.RADIO_EMITTER)
      .subscribe((event: any) => {
        this.updateSkeleton(event?.payload);
        this.updateChatbotConfigurations(event?.payload?.data);
      });

    this.broadcastService
      .on(AppEventType.RANGE_EMITTER)
      .subscribe((event: any) => {
        this.updateSkeleton(event?.payload);
        this.updateChatbotConfigurations(event?.payload?.data);
      });

    this.broadcastService
      .on(AppEventType.CLICKED_ON_LOCALE_DROPDOWN)
      .subscribe(() => {
        this.getChatbotConfigurations();
      });

    this.broadcastService
      .on(AppEventType.HIDE_NOTIFICATION_EVENT)
      .subscribe(() => {
        const index = this.vcr.indexOf(this.ref.hostView);
        if (index != -1) this.vcr.remove(index);
      });

    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT)
      .subscribe((event: any) => {
        if (event.payload.page) {
          this.refreshLocalStorageValue();
          this.getChatbotConfigurations();
        }
      });

    this.broadcastService
      .on(AppEventType.RESET_TO_DEFAULT_CONFIGURATIONS)
      .subscribe(() => {
        this.resetToDefault();
      });
  }

  getChatbotConfigurations() {
    this.isDataLoaded = false;
    this.refreshLocalStorageValue();
    const url = this.utilsService.getChatbotConfigurationsPath(
      this.refNum,
      this.locale,
      this.experienceType,
      this.channel
    );
    this.httpService
      .httpGet(url, 'chatbot_configurations_api')
      .subscribe(result => {
        if (result.statusCode == 404) {
          this.isCustomerIsProvisioned = false;
          this.isDataLoaded = true;
          this.broadcastService.dispatch(
            new AppEvent(AppEventType.CONFIGURATIONS_AVAILABLE_EVENT, {
              isCustomerIsProvisioned: this.isCustomerIsProvisioned,
            })
          );
          if (this.pageId) {
            this.sharedService
              .getDashboardSchemaFromLocale(`${this.pageId}`)
              .subscribe((data: any) => {
                this.skeleton = data;
              });
          } else {
            this.sharedService
              .getDashboardSchemaFromLocale(`/career-site-bot`)
              .subscribe((data: any) => {
                this.skeleton = data;
                this.createFinalStructure(this.skeleton);
              });
          }
        } else {
          this.isCustomerIsProvisioned = true;
          this.broadcastService.dispatch(
            new AppEvent(AppEventType.CONFIGURATIONS_AVAILABLE_EVENT, {
              isCustomerIsProvisioned: this.isCustomerIsProvisioned,
            })
          );
          this.configurations = result;
          if (this.pageId) {
            this.sharedService
              .getDashboardSchemaFromLocale(`${this.pageId}`)
              .subscribe((data: any) => {
                this.skeleton = data;
                this.createFinalStructure(this.skeleton);
              });
          } else {
            this.sharedService
              .getDashboardSchemaFromLocale(`/career-site-bot`)
              .subscribe((data: any) => {
                this.skeleton = data;
                this.createFinalStructure(this.skeleton);
              });
          }
        }
      });
  }

  updateSkeleton({ id, data }: any) {
    let configurations = this.skeleton.configurations.forEach(
      (configuration: any, index: number) => {
        if (configuration.features?.length) {
          configuration?.features.forEach((feature: any, featureIndex: any) => {
            if (data?.type == 'checkbox' && feature.attributes) {
              feature?.attributes?.forEach(
                (attribute: any, attributeIndex: number) => {
                  if (
                    attribute &&
                    feature.attributeConfigurationKey &&
                    feature.attributeConfigurationKey ==
                      data.attributeConfigurationKey
                  ) {
                    this.skeleton.configurations[index].features[
                      featureIndex
                    ].attributes[attributeIndex][data.configurationKey] =
                      data.isActive;
                  } else {
                    this.skeleton.configurations[index].features[
                      featureIndex
                    ].attributes[attributeIndex][data.configurationKey] =
                      data.isActive;
                  }
                }
              );
            }
            if (Object.keys(feature)?.includes(data.configurationKey)) {
              this.skeleton.configurations[index].features[featureIndex][
                data.configurationKey
              ] = data.isActive;
            }
          });
        }
        if (Object.keys(configuration)?.includes(data.configurationKey)) {
          this.disableAllChannels = data.isActive;
          this.skeleton.configurations[index][data.configurationKey] =
            data.isActive;
        }
        return configuration;
      }
    );
  }

  // TODO: this function needs refactoring
  updateChatbotConfigurations({
    attributeConfigurationKey,
    configurationKey,
    isActive,
  }: any) {
    this.refreshLocalStorageValue();
    const url = this.utilsService.getChatbotConfigurationsPath(
      this.refNum,
      this.locale,
      this.experienceType,
      this.channel
    );
    let reqObj;
    let slots: string[] = this.configurations[attributeConfigurationKey];
    if (attributeConfigurationKey) {
      if (!isActive) {
        slots = slots.filter((item: string) => item != configurationKey);
        reqObj = {
          update: {
            [attributeConfigurationKey]: slots,
          },
        };
      } else {
        if (!slots?.includes(configurationKey)) slots.push(configurationKey);
        reqObj = {
          update: {
            [attributeConfigurationKey]: slots,
          },
        };
      }
    } else {
      reqObj = {
        update: {
          [configurationKey]: isActive,
        },
      };
    }
    // TODO: this can be moved to some service (notification service.)
    if (this.ref) {
      const index = this.vcr.indexOf(this.ref.hostView);
      if (index != -1) this.vcr.remove(index);
    }

    this.ref = this.vcr.createComponent(NotificationCardComponent);
    this.httpService
      .httpPatch(url, 'chatbot_configurations_api', reqObj)
      .subscribe(result => {
        this.broadcastService.dispatch(
          new AppEvent(AppEventType.SHOW_NOTIFICATION_EVENT, {
            type: 'success',
            msg: 'Configuration Updated Successfully.',
          })
        );
        setTimeout(() => {
          const index = this.vcr.indexOf(this.ref.hostView);
          if (index != -1) this.vcr.remove(index);
        }, 3000);
      });
  }

  createFinalStructure(skeleton: any) {
    this.sharedService.getI18nValues().subscribe((data: any) => {
      // data = data.record;
      let finalstructure = skeleton.configurations.map((configuration: any) => {
        if (configuration.features?.length) {
          configuration.features = configuration?.features.map(
            (feature: any) => {
              if (feature.attributes) {
                feature.attributes.map((attribute: any) => {
                  if (attribute && feature.attributeConfigurationKey) {
                    attribute[attribute?.configurationKey] =
                      this.configurations[
                        feature.attributeConfigurationKey
                      ]?.includes(attribute?.configurationKey);
                    attribute.literal = data[attribute.literal]
                      ? data[attribute.literal]
                      : attribute.literal;
                    attribute.infoText = data[attribute.infoText]
                      ? data[attribute.infoText]
                      : attribute.infoText;

                    return attribute;
                  } else {
                    attribute[attribute?.configurationKey] =
                      this.configurations[attribute.configurationKey];
                    attribute.literal = data[attribute.literal]
                      ? data[attribute.literal]
                      : attribute.literal;
                    attribute.infoText = data[attribute.infoText]
                      ? data[attribute.infoText]
                      : attribute.infoText;
                    return attribute;
                  }
                });
              }

              if (feature.flows) {
                feature.flows = feature.flows.map((flow: any) => {
                  flow.infoText = data[flow.infoText]
                    ? data[flow.infoText]
                    : flow.infoText;
                  flow.literal = data[flow.literal]
                    ? data[flow.literal]
                    : flow.literal;
                  if (
                    this.configurations[flow.configurationKey] &&
                    this.configurations[flow.configurationKey] == flow.version
                  )
                    flow['isEnabled'] = true;
                  return flow;
                });
              }

              feature[feature.configurationKey] =
                this.configurations[feature.configurationKey];
              feature.infoText = data[feature.infoText]
                ? data[feature.infoText]
                : feature.infoText;
              feature.attributeHeading = data[feature.attributeHeading]
                ? data[feature.attributeHeading]
                : feature.attributeHeading;
              feature.literal = data[feature.literal]
                ? data[feature.literal]
                : feature.literal;
              return { ...feature };
            }
          );
        }
        configuration.heading = data[configuration.heading]
          ? data[configuration.heading]
          : configuration.heading;
        configuration.infoText = data[configuration.infoText]
          ? data[configuration.infoText]
          : configuration.infoText;
        if (configuration.configurationKey) {
          configuration[configuration.configurationKey] =
            this.configurations[configuration.configurationKey];
        }
        return configuration;
      });
      skeleton.configurations = finalstructure;
      this.isDataLoaded = true;
    });
  }

  refreshLocalStorageValue() {
    this.refNum = localStorage.getItem('refNum');
    this.locale = localStorage.getItem('LOCALE');
    this.channel = localStorage.getItem('channel');
    this.experienceType = localStorage.getItem('experienceType');
    // this.pageId = `/${localStorage.getItem('channel')}`;
  }

  checkIfCustomerisProvisioned() {
    this.refreshLocalStorageValue();
    const url = this.utilsService.getChatbotConfigurationsPath(
      this.refNum,
      this.locale,
      this.experienceType,
      this.channel
    );
    this.utilsService
      .checkIfCustomerIsProvisioned(url, this.pageId)
      .then(data => {
        if (data.status !== 404) {
          this.isCustomerIsProvisioned = true;
        } else {
          this.sharedService.getDashboardSchema(this.pageId).subscribe(data => {
            this.configurationPageId = data?.configurationPageId;
          });
          this.isCustomerIsProvisioned = false;
        }
      });
  }

  provision(data: any) {
    this.ref = this.vcr.createComponent(NotificationCardComponent);
    if (data.isProvisioned) {
      const index = this.vcr.indexOf(this.ref.hostView);
      this.ref.instance.notificationText = 'Customer has been provisioned.';
      this.ref.instance.notificationType = 'success';
      setTimeout(() => {
        const index = this.vcr.indexOf(this.ref.hostView);
        if (index != -1) this.vcr.remove(index);
      }, 3000);
      this.getChatbotConfigurations();
    } else {
      this.ref.instance.notificationText = 'Something went wrong.';
      this.ref.instance.notificationType = 'failed';
      setTimeout(() => {
        const index = this.vcr.indexOf(this.ref.hostView);
        if (index != -1) this.vcr.remove(index);
      }, 3000);
    }
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

  resetToDefault() {
    let url = this.utilsService.getResetChatbotConfigurationsPath();
    this.httpService
      .httpDelete(url, 'chatbot_configurations_api')
      .subscribe(res => {
        this.ref = this.vcr.createComponent(NotificationCardComponent);
        this.ref.instance.notificationText =
          'Career Site Bot configs reset to default.';
        this.ref.instance.notificationType = 'success';

        const index = this.vcr.indexOf(this.ref.hostView);
        setTimeout(() => {
          const index = this.vcr.indexOf(this.ref.hostView);
          if (index != -1) this.vcr.remove(index);
        }, 3000);
        this.getChatbotConfigurations();
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.localesLoadedSubscription.unsubscribe();
  }
}
