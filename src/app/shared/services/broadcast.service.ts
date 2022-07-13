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
  observer: Observer<any> | undefined;
  subscriber!: Subscription;
  private eventBrocker = new Subject<AppEvent<any>>();

  constructor() {
    this.observable = new Observable((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }

  on(eventType: AppEventType): Observable<AppEvent<any>> {
    return this.eventBrocker.pipe(filter(event => event.type === eventType));
  }

  dispatch<T>(event: AppEvent<T>): void {
    this.eventBrocker.next(event);
  }

  /**
   *this function is use to get the event that has been raised/triggered from other component.
   *
   * syntax:
   * this.[classObject].subscribe(EventName,(data) => {
   * do something
   * })
   * @param {*} eventName
   * @param {*} callback
   * @return {*}
   * @memberof BroadcastService
   */
  subscribe(eventName: any, callback: any): Subscription {
    this.subscriber = this.observable
      .pipe(
        filter(event => {
          return (event.name = eventName);
        })
      )
      .subscribe(callback);
    return this.subscriber;
  }

  /**
   *This function is use to raise a event
   *
   * syntax:
   * this.[classObject].broadcast(EventName);
   *
   * @param {*} event
   * @memberof BroadcastService
   */
  broadcast(event: Event) {
    if (this.observer != null) {
      this.observer.next(event);
    }
  }

  /**
   *this function will destroy subscription and prevent memory leakage
   *
   * syntax: this.[classObject].broadcast(EventName);
   *
   * @param {Subscription} subscriber
   * @memberof BroadcastService
   */
  destroy(subscriber: Subscription) {
    subscriber.unsubscribe();
  }
}
