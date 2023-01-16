import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent {
  promiseList: string[] = [];

  //Wird durch den Button-Press ausgelöst:
  tuePromiseDinge() {
    let promise: Promise<string> = this.erzeugePromise();

    promise.then(string => this.promiseList.push(string))
    this.promiseList.push('Eins');
  }

  //Erzeugt den Promise
  erzeugePromise(): Promise<string> {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('Zwei');
      }, 500);
    });
  }


  observableList: string[] = [];

  //Wird durch den Button-Press ausgelöst:
  tueObservableDinge() {
    let observable: Observable<string> = this.erzeugeObservable();
    let subscription = observable.subscribe(string => this.observableList.push(string))
    this.observableList.push('Eins');
    setTimeout(() => {subscription.unsubscribe()}, 1200);
  }

  //Erzeugt den Observable
  erzeugeObservable(): Observable<string> {
    return new Observable<string>(subscriber => {
      setTimeout(() => {
        subscriber.next('Zwei');
      }, 500);
      setTimeout(() => {
        subscriber.next('Drei');
      }, 1000);
      setTimeout(() => {
        subscriber.next('Vier');
      }, 1500);
      setTimeout(() => {
        subscriber.next('Fünf');
      }, 2000);
    });
  }

}
