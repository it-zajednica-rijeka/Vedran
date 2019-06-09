import { Component, LOCALE_ID } from '@angular/core';
// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
// ICO guide for pluralization http://userguide.icu-project.org/formatparse/messages
import { TranslateService } from '@ngx-translate/core';
import { Globals } from '.././appshared/appshared';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { registerLocaleData } from '@angular/common';
import localeCastelan from '@angular/common/locales/es';
import localeEnglish from '@angular/common/locales/en';
import localeCroatian from '@angular/common/locales/hr';
import { formatNumber, formatDate } from '@angular/common';


@Component({
  selector: 'appc-home-component',
  templateUrl: './home.component.html',
  providers: [
    { provide: LOCALE_ID, useValue: 'hr' },
  ]
})

export class HomeComponent {

  // ++ View interpolations ++ //
  title = _('demo.title');
  anothervar = _('anothervar');
  color: IColor = Globals.randomColor();
  myDate: Date = new Date();
  myLocalDate: any;
  myLocalNumber: any;
  myNumber = 123.45;
  locale = 'en';

  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
    this.registerCulture('en');
  }
  public useLanguage(language: string) {
    this.translate.use(language);
    this.locale = language;
    this.registerCulture(language);
  }
  public changeColor() {
    this.color = Globals.randomColor(this.color.code);
  }

  public registerCulture(culture: string) {
    if (!culture) {
        return;
    }

    this.locale = culture;

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

    this.myDate = new Date();
    this.myLocalNumber = this.myNumber.toLocaleString(this.locale); // formatNumber(this.myNumber++, this.locale);
    this.myLocalDate = this.myDate.toLocaleString(this.locale); // formatDate(this.myDate, undefined, this.locale);
  }
}
