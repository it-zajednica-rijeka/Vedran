# Angular Pills 5
https://github.com/skatersezo/angular-lesson5-observables

i malo objašnjenja - nije potreban prijevod:

As you can see in the example observables are created by using the new Observable() call, 
then subscribed to by an observer, executed by calling the next() and disposed by calling unsubscribe().

Creating observables
--------------------
Creating observables is easy, just call the new Observable() and pass along one argument which represents the observer. 
Therefore i usually call it “observer” as well.

Subscribing to observables
--------------------------
Remember, observables are lazy. If you don’t subscribe nothing is going to happen. 
It’s good to know that when you subscribe to an observer, each call of subscribe() 
will trigger it’s own independent execution for that given observer. 
Subscribe calls are not shared among multiple subscribers to the same observable.

Executing observables
---------------------
The code inside an observables represents the execution of the observables. 
On the parameter that was given when creating the observable there are three functions available to send data 
to the subscribers of the observable:

“next”: sends any value such as Numbers, Arrays or objects to it’s subscribers.
“error”: sends a Javascript error or exception
“complete”: does not send any value.

Calls of the next are the most common as they actually deliver the data to it’s subscribers. 
During observable execution there can be an infinite calls to the observer.next(), 
however when observer.error() or observer.complete() is called, the execution stops and no more data will be delivered to the subscribers.

Disposing observables
---------------------
Because observable execution can run for an infinite amount of time, we need a way to stop it from executing. 
Since each execution is run for every subscriber it’s important to not keep subscriptions open for subscribers that don’t need data anymore, 
as that would mean a waste of memory and computing power.

When you subscribe to an observable, you get back a subscription, 
which represents the ongoing execution. Just call unsubscribe() to cancel the execution.

This project was developed as a part of a series of projects for practicing angular.

## Observables (RxJs)

In this project the goal is practice Observables within Angular. The topics covered are:
  * Usage of Built-in Angular Observable
  * Build and use of simple observables
  * Build and use of custom observables
  * Unsubscribing observables
  * Build and use of Subject
  * Use of operators for handling retrieved data

## Install and run

NodeJs and AngularCLI are required.

Perform a git clone to a local directory, and then:

```
npm install
```

After install the dependencies:

```
ng serve
```

## Built With

* [Angular](https://angular.io/) - The web framework used
* [Bootstrap@3](https://getbootstrap.com/docs/3.3/) - The CSS framework
* [RxJs] (http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) - The reactive Js library

## Authors

* **Iván Taghavi** 
