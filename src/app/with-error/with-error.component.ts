import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-with-error',
  templateUrl: './with-error.component.html',
  styleUrls: ['./with-error.component.css']
})
export class WithErrorComponent {
  promiseList: string[] = [];

  //Wird durch den Button-Press ausgelöst:
  tuePromiseDinge() {
    let promise: Promise<string> = this.erzeugePromise();

    promise.then(string => this.promiseList.push(string)).catch(err =>this.promiseList.push(err));
  }

  //Erzeugt den Promise
  erzeugePromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        reject('Fehler');
      }, 500);
      setTimeout(() => {
        resolve('Eins');
      }, 1000);
    });
  }


  observableList: string[] = [];

  //Wird durch den Button-Press ausgelöst:
  tueObservableDinge() {
    let observable: Observable<string> = this.erzeugeObservable();
    let subscription = observable.subscribe({
      next: string => this.observableList.push(string),
      error: err => this.observableList.push(err)
    });
  }

  //Erzeugt den Promise
  erzeugeObservable(): Observable<string> {
    return new Observable<string>(subscriber => {
      setTimeout(() => {
        subscriber.next('Eins');
      }, 500)
      setTimeout(() => {
        subscriber.next('Zwei');
      }, 1000);
      setTimeout(() => {
        subscriber.error('Fehler');
      }, 1200);
      setTimeout(() => {
        subscriber.next('Drei');
      }, 1500);
    });
  }
}
