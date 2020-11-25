import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private toastCtrl: ToastController, private location: Location) { }

  ngOnInit() {
  }

  async signup() {
    try {
      let user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      console.log(user);
    } catch(ex) {
      console.log(ex);
    }
  }

  gotoLogin() {
    this.location.back();
  }

}
