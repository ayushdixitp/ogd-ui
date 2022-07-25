import { Component, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Skeleton } from 'src/app/shared/interfaces/web-chatbot.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-web-chatbot',
  templateUrl: './web-chatbot.component.html',
  styleUrls: ['./web-chatbot.component.scss'],
})
export class WebChatbotComponent implements OnInit {
  constructor(
    private broadcastService: BroadcastService,
    private sharedService: SharedService
  ) {}
  finalstructure: any = {};
  skeleton!: any;
  configuration: any;
  isDataLoaded: boolean = false;
  disableAllChannels: boolean = false;

  ngOnInit(): void {
    this.getChatbotConfigurations();
    this.broadcastService
      .on(AppEventType.CHECKBOX_EVENT)
      .subscribe((event: any) => {
        this.updateSkeleton(event.payload);
        this.updateChatbotConfigurations(event.payload);
      });

    this.broadcastService
      .on(AppEventType.TOGGLE_EVENT)
      .subscribe((event: any) => {
        this.updateSkeleton(event.payload);
      });

    this.broadcastService
      .on(AppEventType.SELECTED_PAGE)
      .subscribe((event: any) => {
        console.log(event.payload.data.selectedPageId);
      });
  }

  getChatbotConfigurations() {
    const url = `v1/configurations/TEST_12345567/en_us/cx/web`;
    this.sharedService
      .publicFirePOSTAPI(url, 'chatbot_configurations_api', 'GET')
      .subscribe(result => {
        this.configuration = result;
        console.log(this.configuration);
        this.sharedService.getskeleton().subscribe((data: any) => {
          this.skeleton = data;
          this.createFinalStructure(this.skeleton);
        });
      });
  }

  updateSkeleton({ id, data }: any) {
    let configurations = this.skeleton.configurations.map(
      (configuration: any) => {
        if (configuration.features?.length) {
          configuration.features = configuration?.features.map(
            (feature: any) => {
              // if() {}
              if (data?.type == 'checkbox' && feature.attributes) {
                feature?.attributes?.map((attribute: any) => {
                  if (attribute && feature.attributeConfigurationKey) {
                    attribute[data.ConfigurationKey] = data.isActive;
                    return attribute;
                  } else {
                    attribute[data.ConfigurationKey] = data.isActive;
                    return attribute;
                  }
                });
                this.isDataLoaded = true;
              }
              // debugger
              // if(f)
              if (Object.keys(feature).includes(data.ConfigurationKey)) {
                console.log(
                  feature[data.ConfigurationKey],
                  data.ConfigurationKey
                );
                console.log('got it');
                feature[data.ConfigurationKey] = data.isActive;
              }
              return { ...feature };
            }
          );
        }
        if (Object.keys(configuration).includes(data.ConfigurationKey)) {
          this.disableAllChannels = data.isActive;
          configuration[data.ConfigurationKey] = data.isActive;
        }
        // debugger
        return configuration;
      }
    );
    console.log(configurations);
  }

  updateChatbotConfigurations(fieldName: string) {
    console.log(fieldName);
    const url = `v1/configurations/TEST_12345567/en_us/cx/web`;
    // "update": {
    //     "preferredLanguageLocale": "fr_ca"
    //   }
    // };
    const req = {
      update: {
        jobAlertsSlots: [
          'user_categories',
          'user_preferred_locations',
          'alert_frequency',
          'user_email',
        ],
      },
    };

    // this.sharedService
    //   .publicFirePOSTAPI(url, 'chatbot_configurations_api','PATCH',req)
    //   .subscribe(result => {
    //     this.configuration = result;
    //     console.log(this.configuration);
    //     this.getChatbotConfigurations();
    //   });
  }

  getDistinctLocale() {
    let experienceType = 'cx';
    let serviceName =
      'v1/customers/' + 'HONEUS' + '/' + experienceType + '/distinct-locales';
    // const url = `v1/configurations/PHENA0059/en_us/cx/web`
    this.sharedService
      .publicFirePOSTAPI(serviceName, 'chatbot_configurations_api', 'GET')
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
                    attribute[attribute?.configurationKey] = this.configuration[
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
                      this.configuration[attribute.configurationKey];
                    attribute.literal = data[attribute.literal];
                    attribute.infoText = data[attribute.infoText];
                    return attribute;
                  }
                });
                this.isDataLoaded = true;
              }
              feature[feature.configurationKey] =
                this.configuration[feature.configurationKey];
              feature.infoText = data[feature.infoText]
                ? data[feature.infoText]
                : feature.infoText;
              feature.attributeHeading = data[feature.attributeHeading]
                ? feature[data[feature.attributeHeading]]
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
            this.configuration[configuration.configurationKey];
        }
        return configuration;
      });
      skeleton.configurations = finalstructure;
    });
    console.log(skeleton);
  }
}
