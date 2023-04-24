import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { AppEventType } from '../enums/event.enum';
import { Event } from '../interfaces/broadcast.interface';
import { AppEvent } from './broadcast.event.class';

@Injectable({
  providedIn: 'root',
})
export class BroadcastService {
  observable!: Observable<any>;
  subscriber!: Subscription;
  private eventBroker = new Subject<AppEvent<any>>();

  constructor() {
    this.observable = new Observable((observer: Observer<any>) => {}).pipe(
      share()
    );
  }

  on(eventType: AppEventType): Observable<AppEvent<any>> {
    return this.eventBroker.pipe(filter((event) => event.type === eventType));
  }

  dispatch<T>(event: AppEvent<T>): void {
    this.eventBroker.next(event);
  }
}
