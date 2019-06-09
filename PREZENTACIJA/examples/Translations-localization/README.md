# Angular7Demo
https://github.com/reymad/angular7-ngx-translations

home.component.ts datoteci dodajte kod:
...
...
...
  myDate: Date = new Date();
  myLocalDate: any;
  myLocalNumber: any;
  myNumber = 123.45;
  locale = 'en';
...
...
...
  public useLanguage(language: string) {
    this.translate.use(language);
    this.locale = language;
    this.registerCulture(language);
  }
...
...
...
  public registerCulture(culture: string) {
    if (!culture) {
        return;
    }

    this.locale = culture;

    this.myDate = new Date();
    this.myLocalNumber = this.myNumber.toLocaleString(this.locale); // formatNumber(this.myNumber++, this.locale);
    this.myLocalDate = this.myDate.toLocaleString(this.locale); // formatDate(this.myDate, undefined, this.locale);
    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
        case 'hr': {
            registerLocaleData(localeCroatian);
            break;
        }
        case 'es': {
            registerLocaleData(localeCastelan);
            break;
        }
        default: {
          registerLocaleData(localeEnglish);
          break;
        }
    }
  }
  
  
i u datoteci home.component.html napravite izmjene:
...
...
...
  <p>{{ 'demo.greeting' | translate: {'name':'Manolo!'} }}</p>
  <p>{{ 'demo.letsee' | translate: {'param1': 'algo', 'param2': 'algo2'} }}</p>
  <p>{{ myDate | date : 'fullDate' : 'hr-HR' | lowercase }}</p>
  <p>{{ myLocalDate }}</p>
  <p>{{ myLocalNumber }}</p>
  <p>{{ myNumber | currency: 'EUR': true }}</p>
  <p>{{ myNumber | number : '4.3-5' : 'hr'}}</p>
  <button (click)="changeColor();">Change color</button>
  <button (click)="useLanguage('en')">english</button>
  <button (click)="useLanguage('es')">castellano</button>
  <button (click)="useLanguage('hr')">hrvatski</button>
  <br />
...
...
...


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ngx-tranlate info
https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate

## repo
https://github.com/ngx-translate/core