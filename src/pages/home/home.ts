import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public map:any;
  public marker:any;
  public latLng:any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    this.loadMap();
  }
loadMap() {
  this.geolocation.getCurrentPosition().then((position) => {
    this.latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    let mapOptions = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.marker = new google.maps.Marker({
      position: this.latLng,
      map: this.map,
      title:'Current Position'
    });
    (err) => {
      console.log(err);
    }

  });
}
}
