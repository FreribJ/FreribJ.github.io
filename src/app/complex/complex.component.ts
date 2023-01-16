import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent {
  promiseList: string[] = [];

  //Wird durch den Button-Press ausgelöst:
  promiseCount = 0;

  tuePromiseDinge() {
    let promise: Promise<string> = this.erzeugePromise('Start');

    promise.then(() => {
      return this.erzeugePromise('Eins');
    }).then(() => {
      return this.erzeugePromise('Zwei');
    }).then(() => {
      return this.erzeugePromise('Drei');
    }).then(() => {
      return this.erzeugePromise('Vier');
    }).catch(() => {
      return this.erzeugePromise('Fehler 1');
    }).then(() => {
      return this.erzeugePromise('Fünf');
    }).then(() => {
      return this.erzeugePromise('Sechs');
    }).then(() => {
      return this.erzeugePromise('Sieben');
    }).then(() => {
      return this.erzeugePromise('Acht');
    }).finally(() => {
      this.promiseList.push('Final');
    });
  }

  //Erzeugt den Promise
  erzeugePromise(s: string): Promise<string> {
    this.promiseList.push(s);
    this.promiseCount++;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (s == 'Zwei' || s == 'Sechs')
          reject('Es ist ein Fehler aufgetreten');
        resolve('Resolved');
      }, 500);
    });
  }


  observableList: string[] = [];

  //Wird durch den Button-Press ausgelöst:
  tueObservableDinge() {
    let observable: Observable<string> = this.erzeugeObservable();
    let subscription = observable.subscribe({
      next: string => this.observableList.push(string),
      complete: () => this.observableList.push('Fertig')
    });
  }

  //Erzeugt den Observable
  erzeugeObservable(): Observable<string> {
    return new Observable<string>(subscriber => {
      subscriber.next('Eins');
      setTimeout(() => {
        subscriber.next('Zwei');
      }, 500);
      setTimeout(() => {
        subscriber.next('Drei');
      }, 1000);
      setTimeout(() => {
        subscriber.complete();
      }, 1500);
      setTimeout(() => {
        subscriber.next('Vier');
      }, 2000);
      setTimeout(() => {
        subscriber.next('Fünf');
      }, 2500);
    });
  }
}
