import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppEventType } from 'src/app/shared/enums/event.enum';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigurationsComponent } from './configurations.component';

// const routes: Routes = [
//   { path: 'career-site-bot', component: ConfigurationsComponent },
//   { path: 'employee-site-bot', component: ConfigurationsComponent },
//   { path: 'facebook-bot', component: ConfigurationsComponent },
//   { path: 'msteams-bot',component: ConfigurationsComponent }
// ];

export const routes: Routes = [
  {
    path: '',
    component: ConfigurationsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {
  data: any = [
    {
      heading: 'CMP_CANDIDATE_EXPERIENCE',
      experienceType: 'cx',
      channels: [
        {
          pageId: 'career-site-bot',
          channel: 'career-site-bot',
          heading: 'CMP_CAREERS_SITE_BOT',
        },
        {
          pageId: 'facebook-bot',
          channel: 'facebook',
          heading: 'CMP_FACEBOOK_BOT',
        },
        {
          pageId: 'msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
        {
          pageId: 'sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
        },
      ],
    },
    {
      heading: 'CMP_EMPLOYEE_EXPERIENCE',
      experienceType: 'ex',
      channels: [
        {
          channel: 'career-site-bot',
          heading: 'CMP_EMPLOYEE_SITE',
          pageId: 'employee-site-bot',
        },
        {
          pageId: 'facebook-bot',
          channel: 'facebook',
          heading: 'CMP_FACEBOOK_BOT',
        },
        {
          pageId: 'msteams-bot',
          channel: 'msteams',
          heading: 'CMP_MS_TEAMS_BOT',
        },
        {
          pageId: 'sms-bot',
          channel: 'sms',
          heading: 'CMP_SMS_BOT',
        },
      ],
    },
  ];
  constructor(
    private router: Router,
    private broadcastService: BroadcastService
  ) {
    console.log(this.router.config);
    console.log('in config routing module');
    // this.broadcastService
    //   .on(AppEventType.SELECTED_LOCALE_EVENT)
    //   .subscribe((event: any) => {
    //     let add = location.pathname;
    //     add = add.replace('locales', '');
    //     add = add.slice(1);
    //     console.log(add);
    //     this.router.config.push({
    //       path: `${add}configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
    //       component: ConfigurationsComponent,
    //     });
    //     console.log(this.router.url);

    //     this.router.navigate([
    //       `${add}/configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
    //     ]);
    //     console.log(`${add}/configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`);
    //   });
    // console.log(location.pathname);
    // let oldPath = location.pathname;
    // if(oldPath[0] == '/')
    //   oldPath = oldPath.slice(1);
    // console.log(oldPath);
    // this.router.config.push({path: oldPath,component: ConfigurationsComponent});
    // this.router.config.push({path: `${oldPath}/:experience/:channel`,component: ConfigurationsComponent});
    // this.router.navigate([`${oldPath}`]);
  }
}
