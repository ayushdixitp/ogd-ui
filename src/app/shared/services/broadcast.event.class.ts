import { AppEventType } from '../enums/event.enum';

export class AppEvent<T> {
  constructor(public type: AppEventType, public payload: T) {}
}
