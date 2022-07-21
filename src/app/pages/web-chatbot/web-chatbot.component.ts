import { Component, OnInit } from '@angular/core';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Skeleton } from 'src/app/shared/interfaces/web-chatbot.interface';

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
  ngOnInit(): void {
    this.broadcastService
      .on(AppEventType.CHECKBOX_EVENT)
      .subscribe((event: any) => {
        console.log(event.payload);
      });
    this.broadcastService
      .on(AppEventType.TOGGLE_EVENT)
      .subscribe((event: any) => {
        console.log('toggle', event.payload);
        // this.configuration[event.payload.id] = event.payload.isActive;
        // this.createFinalStructure(this.skeleton);
      });
    this.broadcastService
      .on(AppEventType.SELECTED_PAGE)
      .subscribe((event: any) => {
        console.log(event.payload.data.selectedPageId);
      });
    console.log(new Date().getSeconds());
    this.sharedService.getskeleton().subscribe((data: any) => {
      console.log(new Date().getSeconds());
      this.skeleton = {
        pageId: 'employee-site-bot',
        heading: 'Employee Site Bot',
        configurations: [
          {
            id: 'feature-activation',
            svg: '',
            heading: 'CMP_FEATURE_ACTIVATION',
            infoText: 'CMP_ENABLING...',
            actions: {
              type: 'toggle',
            },
            configurationKey: 'isChannelEnabled',
            isChannelEnabled: true, // add during merge
          },
          {
            id: 'feature-details',
            heading: 'CMP_FEATURE_DETAILS',
            features: [
              {
                id: 'find-a-job',
                actions: {
                  type: 'toggle',
                },
                literal: 'FIND_A_JOB',
                infoText: 'CMP_ENABLING_FEATURES*',
                attributeHeading: 'LIST OF ATTRIBUTES',
                configurationKey: 'isPersonalizationOnDemandEnabled',
                attributeConfigurationKey: 'personalizationOnDemandSlots',
                attributes: [
                  {
                    id: 'user-email',
                    literal: 'USER-EMAIL',
                    infoText: 'CMP_USER_EMAIL',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_email',
                  },
                  {
                    id: 'user-name',
                    literal: 'USER-NAME',
                    infoText: 'CMP_USER_NAME',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_name',
                  },
                  {
                    id: 'user-interests',
                    literal: 'USER-INTERESTS',
                    infoText: 'CMP_USER_INTERESTS',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_interests',
                  },
                  {
                    id: 'user-skills',
                    literal: 'USER-SKILLS',
                    infoText: 'CMP_USER_SKILLS',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_skills',
                  },
                  {
                    id: 'user-preferred-locations',
                    literal: 'USER-PREFERRED-LOCATIONS',
                    infoText: 'CMP_USER_PREFERRED_LOCATIONS',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_preferred_locations',
                  },
                  {
                    id: 'user-job-title',
                    literal: 'USER-JOB-TITLE',
                    infoText: 'CMP_USER_JOB_TITLE',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_job_title',
                  },
                ],
              },
              {
                id: 'job-cards',
                literal: 'CMP_JOB_CARDS',
                infoText: 'CMP_CONFIGURE_WHAT_TO_SHOW_IN_JOB_CARDS',
                attributeHeading: 'CMP_DETAILS_INSIDE_JOB_CARDS',
                configurationKey: '',
                attributeConfigurationKey: '',
                attributes: [
                  {
                    id: 'job-location',
                    literal: 'CMP_JOB_CARD_JOB_LOCATION',
                    infoText: 'CMP_USER_WILL_BE_SEEING_JOB_LOCATION',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'date-of-posting',
                    literal: 'CMP_DATE_OF_POSTING',
                    infoText: 'CMP_USER_WILL_BE_SEEING_JOB_POSTED_DATE',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'form-of-employment',
                    literal: 'CMP_FORM_OF_EMPLOYMENT',
                    infoText: 'CMP_USER_WILL_BE_SEEING_FORM_OF_EMPLOYMENT',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: '',
                  },
                ],
              },
              {
                id: 'faq',
                literal: 'CMP_FAQ',
                infoText: 'CMP_FAQ_*',
                actions: {
                  type: 'toggle',
                },
                attributeHeading: 'CMP_LIST_*',
                configurationKey: 'isFaqEnabled',
                attributes: [
                  {
                    id: 'confidence-threshold',
                    literal: 'CMP_CONFIDENCE_THRESHOLD',
                    infoText: 'CMP_*',
                    actions: {
                      type: 'range',
                    },
                    configurationKey: 'faqSuggestionsThreshold',
                    isInternal: true,
                  },
                ],
              },
              {
                id: 'gig-flow',
                literal: 'CMP_GIG_FLOW',
                infoText: 'CMP_LET_EMPLOYEES_LOOK_FOR_GIG_WORKS',
                actions: {
                  type: 'toggle',
                },
                attributeHeading: 'CMP_LIST_*',
                configurationKey: 'isGigSearchEnabled',
                attributeConfigurationKey: 'gigSearchSlots',
                attributes: [
                  {
                    id: 'category',
                    literal: 'CMP_GIG_CATEGORY',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_THEIR_CATEGORY',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'category',
                  },
                  {
                    id: 'location',
                    literal: 'CMP_GIG_LOCATION',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_THEIR_LOCATION',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'city_state_country',
                  },
                ],
              },
              {
                id: 'quick-apply',
                literal: 'CMP_QUICK_APPLY',
                infoText: 'CMP_LET_EMPLOYEES_QUICK_APPLY',
                actions: {
                  type: 'toggle',
                },
                attributeHeading: 'CMP_LIST_*',
                configurationKey: 'isQuickApplyEnabled',
                attributeConfigurationKey: 'quickApplySlots',
                attributes: [
                  {
                    id: 'name',
                    literal: 'CMP_USER_NAME',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_NAME',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_name',
                  },
                  {
                    id: 'email',
                    literal: 'CMP_USER_EMAIL',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_EMAIL',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_email',
                  },
                  {
                    id: 'phone',
                    literal: 'CMP_USER_PHONE',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_PHONE',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: 'user_phone',
                  },
                ],
              },
              {
                id: 'refer-a-friend',
                literal: 'CMP_REFER_A_FRIEND',
                infoText: 'CMP_LET_EMPLOYEES_REFER_A_FRIEND',
                actions: {
                  type: 'toggle',
                },
                attributeHeading: 'CMP_LIST_*',
                configurationKey: 'isReferralEnabled',
                attributeConfigurationKey: '',
                attributes: [
                  {
                    id: 'referrals-first-name',
                    literal: 'CMP_REFERRALS_FIRST_NAME',
                    infoText:
                      'CMP_USER_WILL_BE_ABLE_TO_ENTER_REFERRALS_FIRST_NAME',
                    actions: {
                      type: 'checkbox',
                      state: 'disabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'referrals-last-name',
                    literal: 'CMP_REFERRALS_LAST_NAME',
                    infoText:
                      'CMP_USER_WILL_BE_ABLE_TO_ENTER_REFERRALS_LAST_NAME',
                    actions: {
                      type: 'checkbox',
                      state: 'disabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'referrals-email',
                    literal: 'CMP_REFERRALS_EMAIL',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_REFERRALS_EMAIL',
                    actions: {
                      type: 'checkbox',
                      state: 'disabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'referrals-phone',
                    literal: 'CMP_REFERRALS_PHONE',
                    infoText: 'CMP_USER_WILL_BE_ABLE_TO_ENTER_REFERRALS_PHONE',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'connection-to-referral',
                    literal: 'CMP_CONNECTION_TO_REFERRAL',
                    infoText:
                      'CMP_USER_WILL_BE_ABLE_TO_ENTER_CONNECTION_WITH_REFERRAL',
                    actions: {
                      type: 'checkbox',
                      state: 'disabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'open-to-relocation',
                    literal: 'CMP_OPEN_TO_RELOCATION',
                    infoText:
                      'CMP_USER_WILL_BE_ABLE_TO_ANSWER_IF_REFERRAL_IS_ABLE_TO_RELOCATE',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'is-referral-actively-looking',
                    literal: 'CMP_IS_REFERRAL_ACTIVELY_LOOKING_FOR_A_JOB',
                    infoText:
                      'CMP_USER_WILL_BE_ABLE_TO_ANSWER_IF_REFERRAL_IS_ACTIVELY_LOOKING_FOR_A_JOB',
                    actions: {
                      type: 'checkbox',
                      state: 'enabled',
                    },
                    configurationKey: '',
                  },
                  {
                    id: 'current-organisation',
                    literal: 'CMP_REFERRAL_CURRENT_ORGANISATION',
                    infoText:
                      'CMP_USER_WILL_BE_ABLE_TO_ENTER_REFERRALS_CURRENT_ORGANISATION',
                    actions: {
                      type: 'checkbox',
                      state: 'disabled',
                    },
                    configurationKey: '',
                  },
                ],
              },
              {
                id: 'quick-referral',
                literal: 'CMP_QUICK_REFERRAL',
                infoText: 'CMP_LET_EMPLOYEES_REFER_JOBS',
                configurationKey: 'isQuickReferralEnabled',
                actions: {
                  type: 'toggle',
                },
              },
              {
                id: 'covid-menu',
                literal: 'CMP_COVID_MENU',
                infoText: 'CMP_LET_CANDIDATES_KNOW_ABOUT_LATEST_COVID_DETAILS',
                configurationKey: 'isCovidMenuEnabled',
                actions: {
                  type: 'toggle',
                },
              },
              {
                id: 'screening',
                literal: 'CMP_SCREENING',
                infoText: 'CMP_LET_BOT_ASK_SCREENING_QUESTIONS_TO_CANDIDATES',
                configurationKey: 'isScreeningEnabled',
                actions: {
                  type: 'toggle',
                },
              },
            ],
          },
        ],
      };
      // this.skeleton = data;
      console.log(data);
      this.createFinalStructure(this.skeleton);
    });

    this.configuration = {
      refNum: 'PHENA0059',
      locale: 'en_us',
      experienceType: 'ex',
      channel: 'web',
      chatbotTranslations: 'https://cdn-bot.phenompeople.com/i18n/MASTER.json',
      chatbotMessageSound:
        'https://cdn-bot.phenompeople.com/txm-bot/prod/Bot_messages.mp3',
      chatbotSilenceSound:
        'https://cdn-bot.phenompeople.com/txm-bot/prod/silence.mp3',
      chatbotNotificationSound:
        'https://cdn-bot.phenompeople.com/txm-bot/prod/Bot_notification.mp3',
      isReplyingUnansweredQuestionsEnabled: true,
      screeningQuestionsSource: 'crm',
      chatbotAvatars: [
        'https://cdn-bot.phenompeople.com/bot-icons/icon_1.svg',
        'https://cdn-bot.phenompeople.com/bot-icons/icon_2.svg',
        'https://cdn-bot.phenompeople.com/bot-icons/icon_3.svg',
        'https://cdn-bot.phenompeople.com/bot-icons/icon_4.svg',
        'https://cdn-bot.phenompeople.com/bot-icons/icon_5.svg',
      ],
      isUnansweredQuestionsEnabled: true,
      isFaqEnabled: false,
      privacyPolicy:
        'The information you provide to the chatbot will be collected to improve your experience. Please read our <a href="https://www.phenompeople.com/privacy-policy" target="_blank" style="text-decoration: none;">privacy policy</a> to see how we are storing and protecting your data',
      chatbotName: 'Phenom People ',
      isPopularFaqsEnabled: false,
      isQuickReferralEnabled: true,
      chatbotQuickReplyTextColor: '#1759B7',
      faqImportSentenceSimilarityThreshold: 0.8,
      knowledgeBaseSentenceSimilarityThreshold: 0.4,
      isJobReferralEnabled: true,
      isJobAlertsEnabled: true,
      isQuickApplyEnabled: true,
      isGigSearchEnabled: true,
      jobSearchSlots: ['category', 'city_state_country'],
      chatbotMessageTextColor: '#ffffff',
      screeningQuestionsExpireAfter: 120,
      isReferralEnabled: true,
      preferredLanguageLocale: 'en_us',
      isChannelEnabled: true,
      chatbotAvatar:
        'https://d7pkvxpsevxsc.cloudfront.net/bot-icons/icon_2.svg',
      isCovidMenuEnabled: false,
      isFaqSuggestionsEnabled: true,
      personalizationOnDemandSlots: [
        'user_email',
        'user_name',
        'user_interests',
        // 'user_skills',
        'user_preferred_locations',
        'user_job_title',
      ],
      jobAlertsSlots: ['category', 'city_state_country', 'user_email'],
      isJobSearchEnabled: true,
      isChatbotMessageAvatarEnabled: true,
      isChatbotNotificationSoundEnabled: true,
      isChatbotMessageSoundEnabled: true,
      faqSuggestionsThreshold: 1,
      chatbotSentenceSimilarityThreshold: 1,
      chatbotDescription: 'Chatbot',
      isScreeningCarryForwardEnabled: false,
      isPopularTopicsEnabled: false,
      chatbotLoadDelay: 5,
      chatbotPrimaryColor: '#1759B7',
      isPersonalizationOnDemandEnabled: false,
      quickApplySlots: ['user_name', 'user_email', 'user_phone'],
      gigSearchSlots: ['category', 'city_state_country'],
      isSmallTalkEnabled: true,
      isPrivacyPolicyEnabled: false,
      isBertEnabled: false,
      isScreeningEnabled: true,
      quickReferralSlots: ['referral_opt_in', 'referral_info'],
      referralRecommendationSlots: [
        'referral_opt_in',
        'referral_preferred_locations',
        'referral_job_title',
      ],
      regionName: 'United States',
      customerName: 'Phenom People',
      uploadedChatbotAvatar: '',
      isBotPopUpCloseStateEnabled: true,
      showChatbot: false,
    };
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
        return configuration;
      });
      skeleton.configurations = finalstructure;
    });
  }
}
