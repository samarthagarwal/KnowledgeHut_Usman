import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string;
  password: string;

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async login() {

    try {
      let user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      console.log(user);

      // Navigate to todos
      this.router.navigate(['/todos']);


    } catch(ex) {
      console.log(ex);

      if(ex.code == "auth/user-not-found") {
        let toast = await this.toastCtrl.create({
          message: "No user found with that email and password.",
          duration: 3000
        });

        toast.present();
      }
    }

  }

  gotoSignup() {
    this.router.navigate(['/signup']);
  }

}
