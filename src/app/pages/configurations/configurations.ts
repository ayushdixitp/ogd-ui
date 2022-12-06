export class Configurations {
  experienceType = localStorage.getItem('experienceType');
  channel = localStorage.getItem('channel');
  notificationTextList: any = {
    reset: [
      {
        channel: 'web',
        experienceType: 'cx',
        msg: 'CMP_BOT_RESET_TO_DEFAULT_CONFIGURATIONS',
      },
      {
        channel: 'web',
        experienceType: 'ex',
        msg: 'CMP_BOT_RESET_TO_DEFAULT_CONFIGURATIONS',
      },
    ],
    updateConfigurations: [
      {
        channel: 'web',
        experienceType: 'cx',
        msg: 'CMP_CONFIGURATIONS_UPDATED_SUCCESSFULLY',
      },
      {
        channel: 'web',
        experienceType: 'ex',
        msg: 'CMP_CONFIGURATIONS_UPDATED_SUCCESSFULLY',
      },
    ],
    configure: [
      {
        channel: 'web',
        experienceType: 'cx',
        msg: 'CMP_CANDIDATE_BOT_CONFIGURED',
      },
      {
        channel: 'web',
        experienceType: 'ex',
        msg: 'CMP_EMPLOYEE_BOT_CONFIGURED',
      },
    ],
  };
  notificationText!: string;
  useCase!: string;
  constructor(useCase: string) {
    this.useCase = useCase;
  }

  getNotificationText() {
    switch (this.useCase) {
      case 'reset': {
        return (this.notificationText = this.notificationTextList.reset.filter(
          (notificationTextListItem: any) => {
            return (
              notificationTextListItem.channel == this.channel &&
              notificationTextListItem.experienceType == this.experienceType
            );
          }
        )[0]);
      }
      case 'updateConfigurations': {
        return (this.notificationText =
          this.notificationTextList.updateConfigurations.filter(
            (notificationTextListItem: any) => {
              return (
                notificationTextListItem.channel == this.channel &&
                notificationTextListItem.experienceType == this.experienceType
              );
            }
          )[0]);
      }
    }
  }
}

/*
    {
        reset: [
            { channel: web, experienceType: cx, msg: "CMP_CONFIGURATIONS_UPDATED_SUCCESSFULLY"  }
            { channel: web, experienceType: ex, msg: "CMP_CONFIGURATIONS_UPDATED_SUCCESSFULLY"  }
        ],
    }
*/
