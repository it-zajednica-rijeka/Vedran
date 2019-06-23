import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, IonicPage } from 'ionic-angular';
import { Utility } from '../../providers/utility';
import { OffersData } from '../../providers/offers-data';
import { google } from 'google-maps';
import { AutocompletePage } from '../autocomplete/autocomplete';
declare const google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  address;
  @ViewChild('mapCanvas') mapElement;
  public map: google.maps.Map;

  constructor(public offersData: OffersData,
    public platform: Platform,
    public modalCtrl: ModalController,
    public utility: Utility, ) {

    this.address = {
      place: {
        desc: '',
        lat: '',
        lng: ''
      }
    };
  }


  ngOnInit() {
    this.loadMapData();
  }

  loadMapData() {
    // //Show loading
    var loading = this.utility.getLoader();
    loading.present();

    this.offersData.getMap().subscribe(mapData => {
      let mapEle = this.mapElement.nativeElement;

      let map = new google.maps.Map(mapEle, {
        center: mapData.find(d => d.center),
        zoom: 15
      });

      mapData.forEach(markerData => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'http://maps.google.com/mapfiles/kml/pal2/icon2.png',
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

    });

    //Hide loading
    setTimeout(function () {
      loading.dismiss();
    }, 1000);
  }

  showAddressModal() {
    let modal = this.modalCtrl.create(AutocompletePage);

    modal.onDidDismiss(data => {

      if (data == undefined) {
        this.loadMapData();
        return;
      }

      this.address.place = data;

      var loading = this.utility.getLoader();
      loading.present();

      let mapEle = this.mapElement.nativeElement;
      let map = new google.maps.Map(mapEle, {
        center: { name: data.desc, lat: data.lat(data.place_id), lng: data.lng(data.place_id), center: true },
        zoom: 16
      });

      let infoWindow = new google.maps.InfoWindow({
        content: `<h5>${data.desc}</h5>`
      });

      let marker = new google.maps.Marker({
        position: { name: data.desc, lat: data.lat(data.place_id), lng: data.lng(data.place_id), center: true },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon2.png',
        title: data.desc
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

      //Hide loading
      setTimeout(function () {
        loading.dismiss();
      }, 1000);
    });

    modal.present();
  }
}
