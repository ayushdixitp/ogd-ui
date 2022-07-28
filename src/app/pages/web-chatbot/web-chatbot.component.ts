import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-web-chatbot',
  templateUrl: './web-chatbot.component.html',
  styleUrls: ['./web-chatbot.component.scss'],
})
export class WebChatbotComponent implements OnInit, OnDestroy {
  currentRoute: string | undefined;
  constructor(
    private broadcastService: BroadcastService,
    private sharedService: SharedService,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routeSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.pageId = event.url;
      }
    });
  }

  finalstructure: any = {};
  skeleton!: any;
  configurations: any;
  isDataLoaded: boolean = false;
  disableAllChannels: boolean = false;
  routeSubscription!: Subscription;
  pageId: string = '/career-site-bot';

  ngOnInit(): void {
    this.getChatbotConfigurations();
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
  }

  getChatbotConfigurations() {
    const url = `v1/configurations/TEST_12345567/en_us/cx/web`;

    this.httpService
      .httpGet(url, 'chatbot_configurations_api')
      .subscribe(result => {
        this.configurations = result;
        this.sharedService
          .getDashboardSchema(this.pageId)
          .subscribe((data: any) => {
            this.skeleton = data;
            this.createFinalStructure(this.skeleton);
          });
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

  updateChatbotConfigurations({
    attributeConfigurationKey,
    configurationKey,
    isActive,
  }: any) {
    // TODO: to be moved in util servies function for building url
    const url = `v1/configurations/TEST_12345567/en_us/cx/web`;

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
      data = data.record;
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
                this.isDataLoaded = true;
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
    });
    console.log(skeleton);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
