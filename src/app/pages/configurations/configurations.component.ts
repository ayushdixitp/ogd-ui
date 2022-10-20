import { Component, OnDestroy, OnInit, NgModule } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { Channels } from 'src/app/shared/enums/channels.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent implements OnInit {
  currentRoute: string | undefined;
  channel!: string | null;
  finalstructure: any = {};
  skeleton!: any;
  configurations: any;
  isDataLoaded: boolean = false;
  disableAllChannels: boolean = false;
  routeSubscription!: Subscription;
  pageId!: string | null;
  refNum!: string | null;
  locale!: string | null;
  experienceType!: string | null;
  isCustomerIsProvisioned!: boolean;
  configurationPageId!: string | undefined;

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
        this.experienceType = paramsList[len - 2];
        localStorage.setItem('experienceType', this.experienceType);
      }
    });
  }

  ngOnInit(): void {
    this.isDataLoaded = false;
    this.refNum = localStorage.getItem('refNum');
    this.locale = localStorage.getItem('locale');
    // this.experienceType = localStorage.getItem('ExperienceType');
    this.experienceType = localStorage.getItem('experienceType');
    console.log(this.experienceType, this.locale, this.refNum);
    this.getChatbotConfigurations();
    this.broadcastService.on(AppEventType.SELECTED_LOCALE_EVENT).subscribe();

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
        // this.isDataLoaded = false;
        this.getChatbotConfigurations();
        // this.checkIfCustomerisProvisioned();
      });

    this.broadcastService
      .on(AppEventType.ACCORDION_EVENT)
      .subscribe((event: any) => {
        // if (event.payload.experienceType && event.payload.heading) {
        //   this.isDataLoaded = false;
        // }
        if (event.payload.page) {
          this.getChatbotConfigurations();
          // this.checkIfCustomerisProvisioned();
        }
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
    // this.sharedService.getDashboardSchemaFromLocale(`/${this.channel}`).subscribe((data) => { debugger });
    this.httpService
      .httpGet(url, 'chatbot_configurations_api')
      .subscribe(result => {
        console.log(this.pageId);
        this.configurations = result;
        if (this.pageId) {
          this.sharedService
            .getDashboardSchemaFromLocale(`/${this.pageId}`)
            .subscribe((data: any) => {
              this.skeleton = data;
              console.log(this.skeleton);
              this.createFinalStructure(this.skeleton);
            });
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
              console.log(
                this.skeleton.configurations[index].features[featureIndex]
                  .attributes
              );
              console.log(
                this.skeleton.configurations[index].features[featureIndex][
                  data.configurationKey
                ]
              );
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
    this.httpService
      .httpPatch(url, 'chatbot_configurations_api', reqObj)
      .subscribe(result => {
        console.log(result);
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
                    attribute.literal = data[attribute.literal];
                    attribute.infoText = data[attribute.infoText];
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
    console.log(skeleton);
  }

  refreshLocalStorageValue() {
    this.refNum = localStorage.getItem('refNum');
    this.locale = localStorage.getItem('locale');
    this.channel = localStorage.getItem('channel');
    this.experienceType = localStorage.getItem('experienceType');
    // this.pageId = `/${localStorage.getItem('channel')}`;
  }

  // checkIfCustomerisProvisioned() {
  //   this.refreshLocalStorageValue();
  //   const url = this.utilsService.getChatbotConfigurationsPath(
  //     this.refNum,
  //     this.locale,
  //     this.experienceType,
  //     this.channel
  //   );
  //   this.utilsService
  //     .checkIfCustomerIsProvisioned(url, this.pageId)
  //     .then(data => {
  //       if (data.status !== 404) {
  //         console.log('Provisioned');
  //         this.isCustomerIsProvisioned = true;
  //       } else {
  //         this.sharedService.getDashboardSchema(this.pageId).subscribe(data => {
  //           this.configurationPageId = data?.configurationPageId;
  //         });
  //         console.log('Not Provisioned', this.configurationPageId);
  //         this.isCustomerIsProvisioned = false;
  //       }
  //     });
  // }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
