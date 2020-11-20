import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
// import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../router.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private location: Location, private routerService: RouterService, private modalCtrl: ModalController) { 

    let person = this.routerService.getPerson();
    console.log(person);

  }

  ngOnInit() {
  }

  gobackToHome() {
    this.location.back();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
