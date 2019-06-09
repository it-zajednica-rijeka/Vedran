import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import 'rxjs/rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  informaticWords: string[] = ['monitor', 'program', 'application', 'keyboard', 'javascript', 'gaming', 'network'];
  tvShows: string[] = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

  numbersOberver: Subscription;
  customObserver: Subscription;
  operatorsObserver: Subscription;

  constructor() { }

  ngOnInit() {
  }

  operatorsExampleWithMap(): void {
    this.unsubscribeAll();
    console.log('The data consists in a series of numbers that will be mapped by multipliying it by 2');

    const operatorsObservable = Observable.interval(1000)
      .map(
        (data: number) => data * 2
      );
    this.operatorsObserver = operatorsObservable.subscribe(
      (data: number) => console.log(data)
    );
  }

  suscribeToTimerObservable(): void {
    console.log('Subscribed to a simple Observable that retrieves a secuence of numbers');
    this.unsubscribeAll();
    const numbersObservable = Observable.interval(1000); // this utility from rxjs creates a timer observable
    this.numbersOberver = numbersObservable.subscribe(
      (number: number) => {
        console.log('Oberserving: ' + number);
      }
    );
  }

  createCustomObservable(): void {
    this.unsubscribeAll();
    // the function 'create()' receives an existing observer that we subscribe to
    // inside the function we set up the observer to emit the data we want
    const myObservable = Observable.create((subscriber: Subscriber<string>) => {
      // async code
      setInterval(() => {
        subscriber.next('Take an IT word: ' + this.informaticWords[Math.floor(Math.random() * this.informaticWords.length)]);
      }, 2000);
      setInterval(() => {
        subscriber.next('Take an TV show: ' + this.tvShows[Math.floor(Math.random() * this.tvShows.length)]);
      }, 1000);
      // setTimeout(() => {
      //   observer.error('There was an error...');
      // }, 10000);
      setTimeout(() => {
        subscriber.complete();
        }, 11000);
      setTimeout(() => {
        subscriber.next('Is it possible to emit another value after complete()???');
      }, 14000);
    });
    console.log('We are subscribed now to the custom observable and we will receive data until the error method gets triggered');
    this.customObserver = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('We are finish here'); }
      );
  }

  unsubscribeAll() {
    if (this.customObserver) {
      this.customObserver.unsubscribe();
    }
    if (this.numbersOberver) {
      this.numbersOberver.unsubscribe();
    }
    if (this.operatorsObserver) {
      this.operatorsObserver.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

}
