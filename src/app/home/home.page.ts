import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { PopoverPage } from '../popover/popover.page';
import { RouterService } from '../router.service';

import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  people: any;
  clickedPicture: string;

  constructor(private router: Router, private alertController: AlertController, private routerService: RouterService, private modalCtrl: ModalController, private popoverCtrl: PopoverController, private httpClient: HttpClient, private camera: Camera, private geo: Geolocation) {

    this.getData();
    this.getLocation();
    
  }

  async getLocation() {

    console.log("Getting location, please wait...");
    let location = await this.geo.getCurrentPosition();
    console.log(location);

  }

  async launchCamera() {


    let cameraOptions: CameraOptions = {
      quality: 75,
      cameraDirection: this.camera.Direction.BACK,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 512,
      targetWidth: 512,
      saveToPhotoAlbum: true
    };

    let pictureData = await this.camera.getPicture(cameraOptions);
    console.log(pictureData);

    this.clickedPicture = 'data:image/jpeg;base64,' + pictureData;
  }
 

  async getData() {
    try  {

      // show loading
      let response = await this.httpClient.get("https://www.json-generator.com/api/json/get/cgouSswUwO?indent=2").toPromise();
      console.log(response);

      this.people = response;
      // hide loading
    } catch(ex) {
      // show toast for 3-5 seconds
    }
  }


  refresh(event) {
    setTimeout(() => {
      this.people.unshift({
        index: 0,
        isActive: false,
        balance: "$2,053.55",
        picture: "http://placehold.it/32x32",
        name: "Joanne Henry",
        gender: "female",
      });

      event.target.complete();
    }, 3000);
  }

  loadMoreData(event) {
    setTimeout(() => {
      // backup the original list
      let peopleCopy = this.people;

      // reverse the copied list
      peopleCopy.reverse();

      // combine
      this.people = this.people.concat(peopleCopy);
      console.log(this.people);

      event.target.complete();
    }, 2000);
  }

  async gotoDetail(person) {
    // let modal = await this.modalCtrl.create({
    //   component: DetailPage
    // });
    // modal.present();

    this.modalCtrl.create({
      component: DetailPage
    }).then((modal) => {
      modal.present();
    })



    // this.router.navigate(["/detail"]);
  }

  async showMenu(ev) {
    let popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: ev
    });

    popover.present();
  }
}
