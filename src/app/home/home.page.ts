import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle: string = "HelloIonic"; //String
  num1: number = 45; //int, double, float
  num2: number = 12; //int, double, float
  isValid: boolean = true; // bool
  buttonColor: string = "danger";

  constructor() {
    
  }

  ionViewWillEnter() {
    console.log("Page is about to be loaded...");
  }

  ionViewDidEnter() {
    console.log("Page is loaded...");
  }

  ionViewWillLeave() {
    console.log("Page is about to be unloaded...");
  }

  ionViewDidLeave() {
    console.log("Page is unloaded...");
  }

  changeColor() {
    if(this.buttonColor == "danger")
      this.buttonColor = "success";
     else 
     this.buttonColor = "danger";
  }

}
