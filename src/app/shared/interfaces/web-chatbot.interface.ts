export interface Actions {
  type: string;
  state?: string;
}

export interface Attribute {
  id: string;
  actions: Actions;
  literal: string;
  infoText: string;
  configurationKey: string;
  user_preferred_locations: boolean;
  user_job_title?: boolean;
  isInternal?: boolean;
  category?: boolean;
  city_state_country?: boolean;
  faqSuggestionsThreshold?: number;
  user_email?: boolean;
  user_name?: boolean;
}

export interface Feature {
  id: string;
  actions: Actions;
  literal: string;
  infoText: string;
  attributes: Attribute[];
  attributeHeading: string;
  configurationKey: string;
  attributeConfigurationKey: string;
  isPersonalizationOnDemandEnabled: boolean;
  isJobSearchEnabled?: boolean;
  isFaqEnabled?: boolean;
  isJobAlertsEnabled?: boolean;
  isQuickApplyEnabled?: boolean;
  svg: string;
  isCovidMenuEnabled?: boolean;
  isScreeningEnabled?: boolean;
}

export interface Configuration {
  id: string;
  svg: string;
  actions: Actions;
  heading: string;
  infoText: string;
  configurationKey: string;
  features: Feature[];
}

export interface Skeleton {
  pageId: string;
  heading: string;
  experience: string;
  configurations: Configuration[];
}
