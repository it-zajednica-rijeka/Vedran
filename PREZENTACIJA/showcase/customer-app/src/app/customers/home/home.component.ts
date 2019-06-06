import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import localeHR from '@angular/common/locales/hr';
import localeEN from '@angular/common/locales/en';

import { TranslateService } from '@ngx-translate/core';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'hr' },
  ]
})
export class HomeComponent implements OnInit {
  public badgesList: any[];
  private _locale: string;

  constructor(private dataService: DataService,
              private translate: TranslateService) {
                translate.setDefaultLang('hr');
                this.registerCulture('hr');
              }

  set locale(value: string) {
    this._locale = value;
  }
  get locale(): string {
    return this._locale || '';
  }

  registerCulture(culture: string) {
    if (!culture) {
      return;
    }


    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
      case 'hr': {
        registerLocaleData(localeHR);
        this.locale = 'hr-HR';
        break;
      }
      case 'en': {
        registerLocaleData(localeEN);
        this.locale = 'en-US';
        break;
      }
    }
  }

  ngOnInit() {

    // this.registerCulture('hr');

    this.dataService.getBadges()
      .pipe(map(res => {
        return res;
      }))
      .toPromise()
      .then(x => {
        this.badgesList = x;
      });
  }
}
