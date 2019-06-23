import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html'
})
export class NotifyPage {
  pageTitle: string = "Latitude/Longitude";
  lat: number;
  lng: number;
  constructor(private geo: Geolocation) { }

  ionViewDidLoad() {
    this.geo.getCurrentPosition({ enableHighAccuracy: false }).then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      alert('Error getting location' + error);
    });

    let watch = this.geo.watchPosition({ enableHighAccuracy: false, timeout: 10000 });
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
    });

  }

}
