import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyDXtkZBot8oMtfgAy7tbFg-Tl9VS1hc1E4",
  authDomain: "todoionic-357d9.firebaseapp.com",
  databaseURL: "https://todoionic-357d9.firebaseio.com",
  projectId: "todoionic-357d9",
  storageBucket: "todoionic-357d9.appspot.com",
  messagingSenderId: "1034212382553",
  appId: "1:1034212382553:web:7fc6a3cf52ba3a841e5e48"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen, 
    Camera, 
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
