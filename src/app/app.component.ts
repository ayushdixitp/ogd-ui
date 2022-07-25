import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'chatbot-management-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor() {}
  title = 'chatbot-management-app';

  ngOnInit() {}
}
