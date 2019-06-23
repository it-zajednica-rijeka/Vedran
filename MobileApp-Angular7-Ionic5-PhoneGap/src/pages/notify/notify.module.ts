import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Push } from '@ionic-native/push/ngx';
import { NotifyPage } from './notify';

@NgModule({
  declarations: [
    NotifyPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifyPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotifyPage
  ],
  providers: [Geolocation, Push]
})
export class NotifyPageModule { }
